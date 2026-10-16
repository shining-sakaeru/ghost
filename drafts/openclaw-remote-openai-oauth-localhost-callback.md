---
title: "[2/6] 원격 Oracle 서버의 OpenClaw OpenAI OAuth가 localhost에서 실패할 때"
slug: openclaw-remote-openai-oauth-localhost-callback
excerpt: "Oracle Cloud 호스트에서 시작한 OpenClaw OpenAI OAuth가 로컬 브라우저의 localhost callback으로 돌아가 ERR_CONNECTION_REFUSED를 낸 원인과 해결 방법을 정리합니다."
tags: [OpenClaw, OpenAI, OAuth, OracleCloud, 보안]
---

오늘 Oracle Cloud Ubuntu 호스트에서 OpenClaw 2026.10.3을 설정하며 확인한 내용을 정리한 실전 시리즈의 1편이다. 서버 주소, Gateway token, OAuth token과 개인 식별 정보는 원고에 포함하지 않았다.

## 문제: 인증은 진행됐는데 localhost가 거부됐다

OpenClaw Gateway를 Oracle Cloud Ubuntu 호스트에서 실행하고 OpenAI 브라우저 인증을 시작했다. OpenAI 로그인과 승인까지는 진행됐지만 마지막에 다음 오류가 나타났다.

```text
This site can’t be reached
localhost refused to connect
ERR_CONNECTION_REFUSED
```

처음에는 OpenAI 서버나 Gateway token이 잘못된 것으로 생각하기 쉽다. 그러나 이 오류는 OAuth callback을 받을 서버가 다른 위치에 있다는 뜻에 가깝다.

## localhost는 어느 컴퓨터인가

OpenClaw가 원격 Oracle 호스트에서 실행되어도 OAuth 주소를 로컬 브라우저에서 열면 `localhost`는 내 PC를 가리킨다. OpenAI Codex OAuth의 기본 callback은 다음과 같다.

```text
http://localhost:1455/auth/callback
```

정상적인 흐름은 Oracle host의 OpenClaw가 callback을 받아야 하지만, 실제로는 내 PC의 1455 포트로 접속한다. 그곳에 callback listener가 없으므로 연결 거부가 발생한다. Notion custom OAuth에서 겪은 것처럼 요청을 시작한 서버와 반응하는 서버가 다른 문제다.

## 해결 방법 1: device-code 로그인

원격·headless 서버에서는 localhost callback을 사용하지 않는 device-code 흐름이 가장 간단하다. Oracle host에 SSH로 접속한 뒤 실행한다.

```bash
openclaw models auth login --provider openai --device-code
```

터미널에 표시된 주소와 device code를 로컬 브라우저에서 사용한다. 완료 후에는 token을 출력하지 말고 상태만 확인한다.

```bash
openclaw models auth list --provider openai
openclaw models status
```

## 해결 방법 2: SSH port forwarding

일반 browser OAuth가 필요하면 로컬 PC에서 Oracle의 callback 포트를 터널링한다.

```bash
ssh -N -L 1455:127.0.0.1:1455 oracle-server
```

터널을 유지한 상태에서 다른 터미널로 Oracle host에 접속해 OAuth를 시작한다.

```bash
openclaw models auth login --provider openai
```

이제 브라우저가 `localhost:1455`로 돌아와도 SSH tunnel을 통해 Oracle host의 OpenClaw가 callback을 받는다.

## Gateway token과 OAuth token은 다르다

Gateway token은 OpenClaw Gateway 접속용이고, OpenAI OAuth profile은 ChatGPT/Codex 모델 사용을 위한 provider 인증이다. Gateway token이 정상이어도 callback은 실패할 수 있고, callback이 성공해도 모델 route가 잘못되면 요청은 실패한다.

## 본문 요약

- 원격 서버에서 시작한 OAuth라도 브라우저의 `localhost`는 로컬 PC를 가리킨다.
- OpenAI 인증은 device-code를 우선 검토하고, loopback callback이 필요하면 SSH port forwarding을 사용한다.
- OAuth 완료 후에는 token 값이 아니라 profile 존재와 만료 상태만 확인한다.
- Gateway 인증과 OpenAI provider 인증은 서로 다른 계층이다.

## 느낀점

로그인 화면까지 정상으로 보이면 인증도 거의 끝났다고 생각했지만, 실제 핵심은 마지막 callback이었다. `localhost`를 고정된 장소처럼 이해한 것이 문제였다. 이후에는 인증 명령을 실행하기 전에 callback listener가 어디에서 열리고 브라우저가 어느 컴퓨터에서 실행되는지 그림으로 먼저 확인하게 됐다. 이 습관은 Blogger OAuth를 복구할 때도 그대로 도움이 됐다.

다음 편에서는 OAuth profile이 저장된 뒤에도 `No route-compatible authentication source is configured for openai`가 발생한 원인을 다룬다.
