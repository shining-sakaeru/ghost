> ## Content Index
> Fetch the complete content index at: http://64.110.107.153:2368/llms.txt
> Use this file to discover other available public pages before exploring further.

# [연재 3화] GitHub Pages 정적 배포 자동화와 Google AdSense 및 `ads.txt` 연동
- URL: http://64.110.107.153:2368/series-3-github-pages-adsense-ads-txt/
- Published: 2026-10-04T12:10:00.000Z
- Updated: 2026-10-04T13:19:46.000Z

서버 유지비용 걱정 없이 블로그를 영구적으로 운영하고 수익화까지 연결하는 하이브리드 아키텍처는 많은 개발자들의 로망입니다. 이번 글에서는 동적 CMS인 Ghost의 관리 편의성을 누리면서도, 최종 결과물은 **GitHub Pages**를 통해 무료로 서비스하고 **Google AdSense**를 연동하는 방법을 정리합니다.

---

## 1\. Wget을 활용한 정적 사이트 추출 (Static Site Generation)

오라클 서버에서 구동되는 동적 Ghost 사이트(`http://64.110.107.153:2368/`)를 완벽한 정적 HTML/CSS 파일들로 변환하기 위해 `wget` 크롤링 도구를 활용합니다.

```bash
# 로컬 Ghost 서버를 크롤링하여 docs/ 디렉토리에 정적 파일 생성
wget -r -nH -P docs -E -T 5 -np -k http://64.110.107.153:2368/

```

이 명령어는 홈, 태그, 개별 포스트, 어바웃 페이지를 모두 다운로드하고 내부 링크를 상대/절대 경로(`-k`)로 깔끔하게 변환해 줍니다. 생성된 `docs/` 폴더를 [GitHub Pages 레포지토리](https://github.com/shining-sakaeru/shining-sakaeru.github.io?ref=64.110.107.153)의 루트에 푸시하면 고성능 정적 블로그가 완성됩니다.

*참고 출처: [GNU Wget Manual](https://www.gnu.org/software/wget/manual/wget.html?ref=64.110.107.153), [GitHub Pages Documentation](https://docs.github.com/en/pages?ref=64.110.107.153)*

---

## 2\. Google AdSense 자동 광고 및 \`ads.txt\` 연동

블로그 수익화를 위한 구글 애드센스 승인과 연동을 위해 두 가지 필수 작업을 진행했습니다.

- **애드센스 자동 광고 스크립트 주입**: Source 테마의 템플릿 파일인 `default.hbs`의 `<head>` 영역에 아래 스크립트를 삽입합니다.  
```html  
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8445796587035649" crossorigin="anonymous"></script>  
```
- **`ads.txt` 파일 배치**: 정적 사이트 루트 및 GitHub Pages 루트 디렉토리에 아래 내용으로 `ads.txt`를 생성합니다.  
```text  
google.com, pub-8445796587035649, DIRECT, f08c47fec0942fa0  
```

*참고 출처: [Google AdSense Help - Guide to ads.txt](https://support.google.com/adsense/answer/7532445?ref=64.110.107.153)*