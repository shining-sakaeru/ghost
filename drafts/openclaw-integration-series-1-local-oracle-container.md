---
title: "[1/6] 로컬·Oracle 서버·컨테이너를 잇는 AI 운영 구조: OpenClaw 통합기의 시작"
slug: local-oracle-container-ai-agent-integration
excerpt: "Mac 로컬 브라우저, Oracle Ubuntu 호스트, OpenHands 컨테이너가 서로 다른 localhost와 파일 경로를 사용하는 문제를 공유 작업공간과 handoff 규칙으로 해결한 과정을 정리합니다."
tags: [OpenClaw, OpenHands, OracleCloud, Docker, AI운영]
---

OpenClaw를 Oracle Cloud Ubuntu 서버에서 운영하면서 OpenCode와 OpenHands까지 함께 사용하려니 단순 설치보다 환경 사이의 경계를 이해하는 일이 더 어려웠다. 이번 시리즈는 로컬 Mac 브라우저, Oracle 호스트, Docker 컨테이너가 어떻게 연결되고 어디서 자주 어긋났는지를 실제 시행착오 중심으로 정리한다. 1편의 결론은 간단하다. **경로, localhost, 자격증명, 작업 주체를 환경별로 명확히 나누지 않으면 자동화가 아니라 혼란이 자동화된다.**

## 세 환경은 같은 프로젝트를 다르게 본다

작업에는 세 개의 실행 환경이 참여했다.

| 환경 | 역할 | 프로젝트 경로 |
|---|---|---|
| 로컬 Mac | 브라우저 OAuth 승인, SSH 접속 | 로컬 파일 시스템 |
| Oracle Ubuntu 호스트 | Ghost·OpenClaw·OpenCode 실행 | `/home/ubuntu/projects/project/ghost` |
| OpenHands 컨테이너 | 원고 작성, 코드 수정, 게시 자동화 | `/home/openhands/workspace/project/ghost` |

호스트와 컨테이너의 절대 경로는 다르지만 Docker mount를 통해 같은 프로젝트를 본다. 처음에는 경로가 다르다는 이유로 별도 checkout이라고 오해하기 쉬웠다. 이를 확인하기 위해 양쪽에서 `handoff.md`의 SHA-256 값을 비교했다.

```bash
sha256sum handoff.md
```

해시가 같아야 같은 파일을 보고 있다고 판단했다. 파일 이름도 Linux에서 대소문자를 구분하므로 `handoff.md`와 `HANDOFF.md`를 혼용하지 않았다.

## localhost는 항상 현재 프로세스의 컴퓨터다

가장 많은 문제를 만든 단어는 `localhost`였다. Mac 브라우저의 `localhost`, Oracle 호스트의 `localhost`, 컨테이너의 `localhost`는 모두 다른 네트워크 공간이다. OAuth callback listener가 Oracle의 `127.0.0.1:8080`에서 기다리는데 Mac 브라우저가 자기 자신의 8080 포트로 돌아오면 연결은 실패한다.

Docker 안에서 Ghost에 접근할 때도 같은 원리가 적용됐다. 컨테이너의 `localhost:2368`은 호스트의 Ghost가 아니다. 이 구성에서는 Docker host gateway 주소를 `GHOST_URL`로 사용했다. 특정 내부 주소를 원고에 공개하기보다 환경 변수로 분리했다.

## handoff와 단일 작성자 규칙

OpenCode와 OpenHands가 같은 파일을 동시에 수정하면 덮어쓰기와 불완전한 상태가 생길 수 있다. 그래서 공유 `handoff.md`와 디렉터리 잠금을 사용했다.

```bash
if [ -e .agent-work.lock ]; then
  echo 'workspace locked; do not edit'
  exit 1
fi
mkdir .agent-work.lock || exit 1
```

작업 전에는 담당자, 작업 내용, 시작 시각을 기록하고 작업 후에는 검증 결과, 변경 파일, 미완료 사항, 다음 행동을 남긴다. 다른 에이전트의 잠금은 임의로 지우지 않는다. 이 규칙 덕분에 호스트에서 인증을 복구한 뒤 컨테이너가 결과를 이어받을 수 있었다.

## 경계를 먼저 문서화해야 하는 이유

처음에는 명령이 실패할 때마다 개별 오류만 고쳤다. 하지만 callback, 파일 권한, mount, 환경 변수 문제가 반복되는 것을 보고 공통 원인이 환경 경계라는 점을 알게 됐다. 이후에는 명령보다 먼저 다음을 확인했다.

1. 명령이 어느 환경에서 실행되는가?
2. `localhost`는 어느 네트워크 공간인가?
3. 파일은 host와 container 중 어디에 존재하는가?
4. secret은 값이 아니라 경로 또는 환경 변수로 전달되는가?
5. 현재 workspace의 작성 권한은 누구에게 있는가?

이 다섯 가지를 답하면 많은 오류가 애플리케이션 문제가 아니라 배치 문제였음을 빠르게 구분할 수 있었다.

## 본문 요약

- Mac, Oracle host, OpenHands container는 서로 다른 실행·네트워크 환경이다.
- 경로가 달라도 mount와 파일 해시를 통해 같은 workspace인지 검증할 수 있다.
- 각 환경의 `localhost`는 서로 다르므로 OAuth와 서비스 연결에 터널 또는 host gateway가 필요하다.
- `handoff.md`와 원자적 lock으로 OpenCode·OpenHands의 동시 수정을 막았다.
- 문제 해결 전 실행 위치, 네트워크, 파일, secret, 작업 주체를 먼저 확인한다.

## 느낀점

처음에는 자동화 도구가 많을수록 작업이 빨라질 것이라 생각했다. 실제로는 도구 사이의 책임과 경계가 불명확하면 사람이 상태를 추적하는 비용이 더 커지고, 임시 연결을 계속 덧붙이면 금세 스파게티 구조가 됐다. 가장 효과가 컸던 개선은 새로운 도구를 추가한 일이 아니라 같은 파일을 보는지 확인하고 한 번에 한 에이전트만 쓰게 만든 단순한 규칙이었다. 특히 처음부터 데이터 흐름, 인증 경계, 실패 복구 지점을 포함한 아키텍처를 설계해야 이후 코드와 운영 절차가 엉키지 않는다는 점을 느꼈다. 다음부터는 구현 전에 아키텍처 표와 secret 이동 경로, 목적지별 완료 조건을 먼저 작성하려고 한다.

다음 편에서는 Oracle 서버에서 시작한 OpenAI OAuth가 Mac 브라우저의 `localhost`로 돌아오며 실패한 원인과 해결 방법을 다룬다.
