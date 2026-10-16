---
title: "[4/6] OpenClaw Codex plugin은 enabled인데 runtime이 unavailable일 때"
slug: openclaw-codex-plugin-registry-runtime-fix
excerpt: "OpenClaw Codex plugin이 enabled로 보이는데도 agent harness codex를 찾지 못한 문제를 plugin registry와 Gateway 재시작으로 진단합니다."
tags: [OpenClaw, Codex, plugins, Gateway, 운영]
---

오늘 Oracle Cloud Ubuntu 호스트에서 OpenClaw runtime을 점검하며 확인한 실전 시리즈의 3편이다. Gateway token, OAuth token, API key와 같은 비밀값은 기록하지 않고 상태와 복구 절차만 설명한다.

## enabled와 runtime available은 다르다

OpenAI OAuth와 모델 설정을 확인한 뒤에도 OpenClaw 요청이 실패했다. `models status`에는 다음과 비슷한 상태가 표시됐다.

```text
openai via codex
status=unavailable
auth=usable
runtime=unavailable
No enabled plugin owns agent harness "codex".
```

그런데 `openclaw plugins list --verbose`에서는 Codex plugin이 enabled로 보였다. plugin이 발견되고 설정에 enabled로 기록된 것과 현재 Gateway process가 runtime owner를 활성화한 것은 같은 일이 아니다.

## persisted registry 경고

plugin 목록에는 다음 경고도 함께 표시될 수 있다.

```text
Persisted plugin registry no longer matches current plugin discovery or metadata
```

이는 설치 파일과 저장된 registry 정보가 어긋났다는 뜻이다. OpenClaw가 derived plugin index로 임시 동작할 수는 있지만, Gateway runtime이 오래된 registry를 계속 사용하면 Codex harness가 unavailable로 남을 수 있다.

## 점검 명령

Oracle host에서 다음 명령을 실행한다.

```bash
openclaw plugins list --enabled --verbose
openclaw plugins inspect codex --runtime
openclaw config get plugins.allow --json
openclaw config get plugins.entries.codex --json
```

plugin ID가 `codex`인지, enabled인지, runtime metadata가 있는지, allowlist가 Codex를 차단하지 않는지 확인한다.

## registry 갱신과 재시작

Codex plugin이 이미 설치되어 있다면 먼저 재설치하지 말고 registry를 갱신한다.

```bash
openclaw plugins registry --refresh
```

allowlist를 사용하는 구성에서 `codex`가 빠져 있다면 기존 항목을 지우지 않고 추가한다. 그 다음 Gateway를 재시작한다.

```bash
openclaw plugins enable codex
openclaw gateway restart
```

systemd user service로 실행 중인 경우에는 다음 명령을 사용할 수 있다.

```bash
systemctl --user restart openclaw-gateway
```

재시작 뒤에는 새 process가 실제 plugin을 읽었는지 확인한다.

```bash
openclaw plugins inspect codex --runtime
openclaw models status
openclaw models status --probe --probe-provider openai
```

## 설정 변경의 안전한 순서

운영 Gateway에서 OAuth profile을 삭제하거나 SQLite를 직접 수정하지 않는다. 다음 순서가 복구 범위를 작게 만든다.

1. 현재 상태와 설정 키를 출력하되 secret은 마스킹한다.
2. persisted plugin registry를 갱신한다.
3. Codex plugin enabled와 allowlist를 확인한다.
4. 필요한 경우 `auth.order.openai`를 설정한다.
5. Gateway를 재시작한다.
6. status와 probe를 실행한다.
7. 비밀값을 요구하지 않는 실제 모델 요청을 한 번 테스트한다.

`~/.openclaw/state/openclaw.sqlite`를 직접 편집하지 않는 것도 중요하다. auth state와 plugin state는 OpenClaw CLI가 관리하도록 두어야 migration과 lock 처리가 유지된다.

## 로그에 남기지 말아야 할 값

OpenClaw 배너 자체는 시작 메시지다. 그러나 다음 값은 로그나 포스트에 남기면 안 된다.

- Gateway token
- OpenAI access token
- refresh token
- API key
- OAuth authorization code와 state
- Cookie와 Authorization header

상태 보고에는 profile ID, provider, expiry, plugin enabled 여부만 사용한다.

## 본문 요약

- plugin 목록의 `enabled`와 실행 중 Gateway의 runtime `available`은 다른 상태다.
- persisted registry 경고가 있으면 재설치보다 registry refresh를 먼저 시도한다.
- allowlist, plugin metadata, Gateway 재시작, provider probe 순으로 확인한다.
- auth SQLite를 직접 수정하지 않고 OpenClaw CLI의 migration과 lock을 유지한다.

## 느낀점

설정 파일에서 enabled라고 보이면 실행 프로세스도 같은 상태일 것이라고 생각했다. 하지만 설치 파일, persisted registry, 현재 Gateway process는 서로 다른 시점의 상태를 가질 수 있었다. 이후에는 설정 변경 자체보다 변경을 어느 프로세스가 언제 다시 읽었는지를 검증하게 됐다. 서비스 운영에서 재시작은 해결책이 아니라 상태 적용 단계이며, 재시작 뒤 probe가 완료돼야 작업이 끝난다는 기준도 생겼다.

다음 편에서는 Blogger와 Ghost 자격증명을 호스트에서 복구하고 OpenHands 컨테이너에 안전하게 전달한 방법을 다룬다.
