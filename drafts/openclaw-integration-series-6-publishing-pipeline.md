---
title: "[6/6] Ghost 원본을 GitHub Pages와 Blogger로 안전하게 배포하는 게시 파이프라인"
slug: ghost-github-pages-blogger-publishing-pipeline
excerpt: "Ghost를 원본으로 유지하면서 공개 글을 GitHub Pages Markdown과 Blogger에 동기화하고, 상태 저장과 Git push 재시도 문제를 운영 관점에서 점검합니다."
tags: [Ghost, GitHubPages, BloggerAPI, 자동화, DevOps, AI운영]
---

로컬–Oracle–컨테이너 연결과 세 서비스의 인증을 검증한 뒤에도 바로 글을 발행하지 않았다. 인증 성공은 게시 파이프라인의 일부일 뿐이고, Ghost·GitHub Pages·Blogger 중 하나만 실패하면 세 곳의 상태가 달라질 수 있기 때문이다. 시리즈 마지막 편에서는 Ghost를 단일 원본으로 삼은 이유, 실제 동기화 순서, 발견한 retry 결함을 정리한다.

## Ghost를 원본으로 정한 이유

같은 글을 세 플랫폼에 각각 편집하면 제목, 본문, 날짜, 태그가 쉽게 달라진다. 이 구성에서는 Ghost를 원본 시스템으로 정했다.

```text
원고 작성
→ Ghost draft 또는 예약 게시
→ Ghost 공개 확인
→ 공개 Ghost Content API 조회
→ GitHub Pages Markdown 생성
→ Blogger insert/update
```

Blogger 글에는 Ghost ID marker를 남겨 같은 원문을 다시 처리할 때 새 글을 만들지 않고 기존 글을 갱신한다. GitHub Pages도 Ghost의 공개 콘텐츠를 기준으로 생성해야 canonical과 본문 차이를 줄일 수 있다.

## 처음 Ghost 글을 만드는 경로와 동기화 경로는 다르다

현재 `publish_pipeline.py`는 이미 공개된 Ghost 글을 Content API로 읽어 Jekyll Markdown을 만들고 Blogger에 게시하거나 수정한다. 선택적으로 `--git-push`를 전달해야 GitHub에 push한다. 이 스크립트는 최초 Ghost 글을 만들지 않는다.

Ghost 최초 작성에는 Admin API가 필요하다. 기존 `insert_posts.py`는 module top level에서 하드코딩된 글을 바로 upsert하므로 범용 게시 명령으로 실행하면 안 된다. 새 원고는 front matter를 읽어 HTML로 변환하고, 명시적으로 승인한 slug와 일정만 Admin API에 전달하는 별도 경로가 안전하다.

```python
GhostAdminAPI().upsert_post(
    {
        "title": "승인한 제목",
        "slug": "approved-slug",
        "html": "<p>검토한 본문</p>",
        "status": "draft",
    },
    author_slugs=["noah"],
)
```

처음부터 published로 만들기보다 draft 업로드 후 모바일 레이아웃, 코드 블록, 링크, secret 노출 여부를 확인한다.

## dry-run도 로컬 파일은 쓴다

`publish_pipeline.py --dry-run`은 Blogger 게시와 state 저장은 하지 않지만 로컬 Markdown 파일은 생성한다. dry-run을 완전한 무변경 명령으로 생각하면 안 된다. 생성 파일의 front matter, permalink, canonical, 코드 블록을 검토한 뒤 live 실행으로 넘어가야 한다.

게시 전후에는 다음을 확인한다.

1. Ghost 공개 URL이 HTTP 200인지 확인한다.
2. Ghost sitemap에 slug가 포함됐는지 확인한다.
3. GitHub Pages의 Markdown 또는 정적 HTML이 생성됐는지 확인한다.
4. Blogger에 Ghost ID marker가 있는지 확인한다.
5. 세 플랫폼의 제목, 본문, 공개 날짜가 일치하는지 확인한다.

## 발견한 retry 취약점

현재 pipeline은 optional Git push보다 먼저 `processed_posts.json`을 저장한다. Blogger와 로컬 Markdown 처리가 끝난 뒤 Git push가 실패하면 state에는 완료된 글로 남을 수 있다. 다음 실행에서는 pending post가 없다고 판단해 push를 다시 시도하지 않을 가능성이 있다.

```text
Ghost read 성공
→ Blogger 성공
→ state 저장
→ Git push 실패
→ 다음 실행에서 pending 없음
```

따라서 세 목적지를 완전히 신뢰하기 전에 개선이 필요하다. 방법은 두 가지다.

- Git push 성공 뒤 전체 완료 state를 저장한다.
- Ghost, Blogger, GitHub의 완료 상태를 목적지별로 기록해 실패한 단계만 재시도한다.

두 번째 방식이 더 복잡하지만 Blogger 성공 후 GitHub만 실패하는 부분 성공을 정확히 표현할 수 있다. 자동화에서 중요한 것은 한 번의 성공보다 실패 후 안전하게 같은 작업을 반복할 수 있는 멱등성이다.

## 예약 시리즈 운영

긴 글은 각 편이 독립적인 검색 의도에 답하도록 나누고 1~3일 간격으로 예약한다. 공개되지 않은 다음 글은 제목만 안내하고, 공개 후 실제 링크로 갱신한다. 각 편을 같은 날 한꺼번에 공개하기보다 첫 글의 sitemap, Pages, Blogger 동기화가 정상인지 확인한 뒤 다음 편을 진행한다.

현재 시리즈도 바로 전부 공개하기보다 Ghost draft 여섯 편을 먼저 만들고, 첫 편의 3중 동기화를 controlled post로 검증한 뒤 나머지 예약을 적용하는 방식이 안전하다.

## 본문 요약

- Ghost를 단일 원본으로 두고 공개된 콘텐츠만 GitHub Pages와 Blogger에 동기화한다.
- 최초 Ghost 작성은 Admin API, 공개 글 동기화는 Content API 기반 pipeline으로 역할을 분리한다.
- dry-run도 로컬 Markdown을 생성하므로 결과 검토가 필요하다.
- 현재 state 저장이 Git push보다 빨라 Git 실패를 재시도하지 못할 수 있다.
- 목적지별 완료 상태와 멱등성을 확보한 뒤 3중 게시를 완전 자동화해야 한다.

## 느낀점

처음 목표는 “한 번 명령으로 세 곳에 올리기”였다. 하지만 실제 운영에서 더 중요한 목표는 “중간에 실패해도 어디까지 성공했는지 알고 다시 실행할 수 있기”였다. 기능을 그때그때 이어 붙이면 인증, 변환, 상태 저장, 배포가 한곳에 얽힌 스파게티 코드가 되기 쉽다. 인증을 모두 복구했다고 곧바로 게시하지 않고 읽기 검증과 draft 단계를 둔 덕분에 state 저장 순서의 문제를 발견할 수 있었다. 앞으로는 구현 전에 Ghost 원본, 변환 계층, 목적지 adapter, 목적지별 상태 저장과 재시도 책임을 분리하고, 완료 기준도 명령 종료 코드 하나가 아니라 Ghost URL, sitemap, GitHub Pages, Blogger marker까지 모두 확인하는 것으로 삼으려고 한다.

이 시리즈는 OpenClaw 오류 하나를 고치는 과정에서 시작했지만, 결국 여러 실행 환경과 게시 목적지를 안전하게 연결하는 운영 규칙을 만드는 작업으로 확장됐다.
