> ## Content Index
> Fetch the complete content index at: http://64.110.107.153:2368/llms.txt
> Use this file to discover other available public pages before exploring further.

# [연재 1화] 오라클 서버에 Ghost CMS 구축하기: Source 'Magazine' 테마와 커스텀 스타일링
- URL: http://64.110.107.153:2368/series-1-oracle-ghost-source-theme/
- Published: 2026-10-04T12:00:00.000Z
- Updated: 2026-10-04T13:19:46.000Z

개발자 블로그를 직접 구축하고자 할 때, 가장 먼저 마주하는 고민은 **"어떤 플랫폼을 선택하고 어디에 호스팅할 것인가"**입니다. 미디엄(Medium), 티스토리, 벨로그 등 훌륭한 서비스들이 많지만, 나의 데이터에 대한 온전한 소유권(Data Portability)과 디자인 커스텀 자유도를 원한다면 **Ghost CMS**와 **Oracle Cloud(오라클 클라우드) 서버** 조합은 가장 매력적인 선택지 중 하나입니다.

이번 글에서는 오라클 클라우드 프리티어 환경에 Ghost CMS를 직접 설치하고, 공식 미니멀 테마인 **Source**를 적용한 뒤 감성적인 매거진 레이아웃과 커스텀 컬러링을 입히는 전 과정을 상세히 공유합니다.

---

## 1\. 오라클 서버 환경 세팅과 Ghost CLI 설치

오라클 클라우드 우분투(Ubuntu) 서버 환경에서 Ghost를 구동하려면 Node.js, MySQL(또는 SQLite), 그리고 Ghost 공식 관리 도구인 Ghost CLI가 필요합니다. 터미널에 접속하여 아래 명령어로 패키지를 준비합니다.

```bash
# 시스템 패키지 업데이트 및 Node.js 설치 (Ghost 권장 버전 확인)
sudo apt update && sudo apt upgrade -y
sudo curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Ghost CLI 글로벌 설치
sudo npm install ghost-cli -g

```

서버에 Ghost 디렉토리를 만들고 설치를 진행할 때 가장 중요한 포인트는 **URL 설정**입니다. 외부 접속용 IP 주소(예: `http://64.110.107.153:2368/`)를 정확히 입력해야 나중에 링크 리다이렉트나 어바웃 페이지에서 404 에러를 방지할 수 있습니다. 또한, 오라클 VCN 보안 리스트와 우분투 방화벽(UFW)에서 2368 포트를 반드시 열어주어야 합니다.

```bash
# UFW 방화벽 2368 포트 개방
sudo ufw allow 2368/tcp
sudo ufw allow OpenSSH
sudo ufw enable

```

*참고 출처: [Ghost Official Documentation](https://ghost.org/docs/?ref=64.110.107.153), [Oracle Cloud Free Tier Guide](https://www.oracle.com/cloud/free/?ref=64.110.107.153)*

---

## 2\. Source 테마와 감각적인 매거진(Magazine) 레이아웃

Ghost의 공식 테마인 [**TryGhost/Source**](https://github.com/TryGhost/Source?ref=64.110.107.153)는 속도가 매우 빠르고 모던한 디자인을 제공합니다. 특히 헤더 스타일을 매거진 형태로 지정하면 블로그 메인 화면 상단에 추천(Featured) 포스트들이 멋지게 가로 배치됩니다.

테마의 매거진 레이아웃을 활성화하고 설정을 다듬기 위해 Ghost 관리자 대시보드(`/ghost/`)의 디자인 설정에서 Header style을 **Magazine**으로 선택합니다.

---

## 3\. 세부 디자인 커스텀 (배경색, 폰트, 버튼 색상)

기본 테마의 깔끔함 위에 나만의 개성을 더하기 위해 CSS 커스텀 스타일링을 적용했습니다. 요청하신 디자인 파라미터는 다음과 같습니다:

- **배경색**: 따뜻한 톤의 `#f7f2ed`
- **폰트**: 모던하고 깔끔한 `sans-serif`
- **구독(Subscribe) 버튼 컬러**: 차분한 포인트 컬러 `#7e7e44`

이러한 세심한 스타일링 조정은 방문자에게 전문적이면서도 아늑한 기술 블로그의 인상을 심어줍니다.