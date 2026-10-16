---
title: "[5/6] Oracle 호스트의 Ghost·Blogger·GitHub 인증을 컨테이너에 안전하게 연결하기"
slug: oracle-host-container-ghost-blogger-github-auth
excerpt: "0바이트 Blogger token, 사라진 Ghost Admin API key, GitHub HTTPS 인증 문제를 host 보관·read-only mount·환경 파일·askpass로 복구한 과정을 설명합니다."
tags: [OpenHands, Ghost, BloggerAPI, GitHubPages, OAuth, AI운영]
---

OpenClaw의 OpenAI OAuth와 Codex runtime을 복구한 뒤에는 Ghost, Blogger, GitHub Pages를 한 흐름으로 연결해야 했다. 여기서 다시 같은 문제가 나타났다. Oracle 호스트에서는 준비한 자격증명이 OpenHands 컨테이너에서는 보이지 않았고, Blogger의 `token.json`은 존재하지만 크기가 0바이트였다. 5편에서는 secret 값을 코드나 저장소에 넣지 않고 host와 container 사이에 전달한 구조를 정리한다.

## 0바이트 token은 인증 완료가 아니다

처음 확인한 Blogger 파일 상태는 다음과 같았다.

```text
client_secret.json: 존재, mode 600
token.json: 존재, mode 600, size 0
```

파일 이름과 권한만 보면 설정이 끝난 것처럼 보이지만, 0바이트 token은 사용할 수 없다. client secret은 Google OAuth 애플리케이션의 식별 정보이고, token은 사용자가 Blogger 권한을 승인한 결과다. 둘 중 하나만 있어서는 게시할 수 없다.

Blogger scope는 device-code 흐름으로 처리할 수 없었고 OOB 방식도 더 이상 지원되지 않았다. 그래서 installed-app loopback callback을 사용했다. Mac에서 SSH tunnel을 열고 Oracle host에서 인증 스크립트를 실행했다.

```bash
ssh -N -L 8080:127.0.0.1:8080 oracle-server
```

`ssh -N`이 멈춘 것처럼 보이는 것은 정상이다. 포트 전달을 유지하고 있기 때문이다. 첫 시도는 tunnel 없이 승인 URL부터 열어 실패했고, 이후 tunnel을 먼저 연 뒤 인증을 완료했다. token은 값이 아닌 JSON 유효성, refresh token 존재, 파일 크기와 권한만 검증했다.

## Ghost Admin key는 환경에 자동 전달되지 않는다

Ghost의 `OpenHands Publisher` integration은 이미 있었지만 Admin API key가 컨테이너 환경에 들어오지 않았다. 이전 셸에서 `export`한 값은 SSH 세션이나 container 재생성 뒤 사라질 수 있다. Ghost 설정이 삭제된 것과 실행 환경에 변수가 없는 것은 다른 문제다.

Ghost 자격증명은 값 형식도 구분해야 했다.

```text
Admin API key: integration-id:hex-secret
Content API key: content secret
```

Admin key는 글 생성·수정에 사용하고 Content key는 공개 글 읽기에 사용한다. 이 값들은 로그나 handoff에 남기지 않고 보호된 환경 파일로 전달했다. API 검증도 실제 글을 만들지 않는 읽기 요청으로 수행했다.

## host에 보관하고 container에는 필요한 경로만 mount한다

영구 구성은 역할에 따라 나눴다.

```text
/etc/ghost-blog-sync/openhands.env
/etc/ghost-blog-sync/client_secret.json
/etc/openhands-ghost-auth/token.json
/etc/openhands-ghost-auth/git-askpass
```

환경 파일에는 Ghost API와 Blogger credential 경로, GitHub 인증에 필요한 runtime 변수 이름을 둔다. Blogger client secret은 read-only로 mount하고, refresh 과정에서 갱신될 수 있는 token 파일은 전용 mount에서 container 그룹에 제한적으로 쓰기 권한을 줬다. 프로젝트 디렉터리에는 secret 파일을 복사하지 않았다.

GitHub token도 remote URL에 포함하지 않았다. HTTPS Git 요청 때만 값을 반환하는 제한된 askpass helper를 사용했다.

```text
좋지 않은 방식: https://TOKEN@github.com/owner/repo.git
선택한 방식: 정상 HTTPS remote + GIT_ASKPASS
```

remote URL에 token을 넣으면 설정 출력, 로그, 오류 메시지에 노출될 수 있기 때문이다.

## 컨테이너 재생성과 검증

Docker mount와 env-file은 이미 실행 중인 container에 나중에 붙일 수 없다. OpenHands container를 재생성해 설정을 적용한 뒤 각 경로를 읽기 요청으로 검증했다.

- Blogger `blogs.listByUser`: 블로그 1개 확인
- Ghost Admin API: 사용자 1개 읽기 성공
- Ghost Content API: HTTP 200
- GitHub: `git ls-remote origin HEAD` 성공
- host/container `handoff.md`: SHA-256 일치

이 검증에서는 게시, 수정, push를 하지 않았다. 인증의 존재와 쓰기 작업의 성공은 분리해서 확인해야 실제 콘텐츠를 잘못 발행하는 일을 막을 수 있다.

## 본문 요약

- Blogger client secret이 있어도 token이 0바이트면 OAuth는 완료되지 않은 상태다.
- Blogger loopback callback은 Mac의 SSH tunnel과 Oracle host listener를 연결해 처리했다.
- Ghost Admin key와 Content key의 역할·형식을 구분하고 보호된 env-file로 전달했다.
- secret은 프로젝트에 복사하지 않고 read-only mount, 제한된 writable token mount, Git askpass로 연결했다.
- 컨테이너 재생성 후 각 서비스의 읽기 API로 인증만 먼저 검증했다.

## 느낀점

파일이 있다는 사실과 사용할 수 있다는 사실을 같은 것으로 본 것이 가장 큰 실수였다. 0바이트 token, 셸에서만 살아 있는 환경 변수, host에만 있는 `/etc` 파일은 모두 겉보기에는 설정 완료처럼 보였다. 이후에는 자격증명을 `존재`, `형식`, `권한`, `실제 API 검증`, `재시작 후 지속성` 다섯 단계로 확인하게 됐다. 특히 secret을 쉽게 쓰려고 프로젝트로 옮기기보다 mount 구조를 고치는 편이 번거롭더라도 장기적으로 안전했다.

마지막 편에서는 Ghost를 원본으로 두고 GitHub Pages와 Blogger에 동기화하는 게시 파이프라인과 아직 남은 retry 문제를 정리한다.
