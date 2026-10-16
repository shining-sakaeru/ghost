---
title: "[3/6] OpenClaw OAuth는 성공했는데 route-compatible authentication 오류가 난 이유"
slug: openclaw-openai-route-compatible-auth-error
excerpt: "OpenClaw에 OpenAI OAuth profile이 저장되어 있는데도 route-compatible authentication 오류가 발생한 원인을 모델 route와 auth order 관점에서 분석합니다."
tags: [OpenClaw, OpenAI, Codex, OAuth, troubleshooting]
---

오늘 Oracle Cloud Ubuntu 호스트에서 OpenClaw를 점검하며 확인한 실전 시리즈의 2편이다. 비밀값은 원고에 포함하지 않고 profile 상태와 오류 구조만 기록한다.

## OAuth profile이 있는데도 요청이 실패했다

OpenClaw에서 OpenAI 브라우저 인증을 마친 뒤 profile 목록에는 OAuth 계정이 표시됐다. 그런데 모델에 질문을 보내자 다음 오류가 발생했다.

```text
Error: No route-compatible authentication source is configured for openai.
```

이 메시지는 반드시 OAuth가 실패했다는 뜻은 아니다. 인증 profile은 저장됐지만 현재 선택한 모델 route가 해당 profile을 사용할 수 있다는 보장이 없다는 뜻일 수 있다.

## models status에서 봐야 할 항목

먼저 다음 명령을 실행한다.

```bash
openclaw models auth list --provider openai
openclaw models status
openclaw config get agents.defaults.model --json
openclaw config get auth.order.openai --json
```

실제 점검에서는 OAuth가 `usable`이었지만 runtime은 `unavailable`로 표시됐다. provider credential은 정상인데 모델을 실행할 Codex harness가 준비되지 않은 상태였다.

```text
OAuth profile: usable
Runtime: unavailable
Auth order: unset
```

이 세 줄은 서로 다른 문제를 가리킨다. OAuth 재로그인만 반복해도 runtime이나 auth order 문제는 해결되지 않는다.

## auth.order.openai를 명시한다

OpenClaw는 runtime 기본값으로 profile을 고를 수 있지만, 여러 profile을 운영하거나 원격 서버에서 상태를 재현하려면 auth order를 명시하는 편이 안전하다.

```bash
openclaw config set auth.order.openai '["openai:ACCOUNT_PROFILE"]'
```

`ACCOUNT_PROFILE`은 실제 `models auth list`에 표시된 profile ID로 바꾼다. 실제 이메일과 token은 포스트에 기록하지 않는다.

```bash
openclaw config get auth.order.openai --json
```

## legacy provider 이름을 확인한다

새 설정에서는 `openai`를 사용한다. 오래된 구성에 `openai-codex`가 남아 있으면 route와 auth order가 어긋날 수 있다.

```bash
openclaw doctor --fix
openclaw models auth list --provider openai
```

doctor는 legacy profile과 auth order를 새 OpenAI route로 마이그레이션할 수 있다. 변경 전 설정을 확인하고 OAuth profile을 무작정 삭제하지 않는다.

## 모델 이름과 인증 방식의 관계

OpenClaw의 `openai/*` 모델이 모두 같은 방식으로 실행되는 것은 아니다. Direct OpenAI API key route와 ChatGPT/Codex OAuth route는 목적과 runtime이 다르다. 구독 OAuth를 사용하면서 Codex runtime 모델을 선택했다면 Codex plugin과 OpenAI auth profile이 모두 필요하다.

반대로 API key만 사용할 경우에는 OpenAI Platform API route에 맞는 profile을 구성해야 한다. OpenAI provider라는 이유만으로 모든 인증 방식이 모든 route에서 동작한다고 가정하면 안 된다.

## 검증 순서

```bash
openclaw models list --provider openai
openclaw models status --probe --probe-provider openai
openclaw gateway restart
openclaw models status
```

실제 모델 요청은 비밀값을 요구하지 않는 읽기 전용 질문으로 시험한다. 상태 확인이 통과하기 전까지 publish, file write, 외부 서비스 변경은 시키지 않는다.

## 본문 요약

- `No route-compatible authentication source`는 OAuth 실패만을 뜻하지 않는다.
- credential의 `usable` 상태와 Codex runtime의 `available` 상태를 분리해 확인한다.
- `auth.order.openai`에는 실제 저장된 profile ID를 명시할 수 있다.
- legacy provider 이름, 현재 모델 catalog, 인증 방식과 runtime의 호환성을 함께 검증한다.

## 느낀점

처음에는 인증 오류라는 문구 때문에 OAuth를 다시 받아야 한다고 판단했다. 그러나 상태 출력을 나눠 읽으니 credential은 정상이었고 실행 route가 준비되지 않은 것이 핵심이었다. 오류 메시지의 명사 하나에 끌려가기보다 인증, 모델, runtime을 별도 계층으로 확인해야 한다는 점을 배웠다. 재로그인은 기존 상태를 지워 원인을 더 흐릴 수 있으므로 마지막 수단으로 남기는 편이 안전했다.

다음 편에서는 Codex plugin이 enabled로 보이는데도 runtime이 unavailable인 이유를 plugin registry와 Gateway 재시작 관점에서 다룬다.
