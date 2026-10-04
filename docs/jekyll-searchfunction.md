> ## Content Index
> Fetch the complete content index at: http://64.110.107.153:2368/llms.txt
> Use this file to discover other available public pages before exploring further.

# Jekyll 따라하기(5) - Search function with lunr.js
- URL: http://64.110.107.153:2368/jekyll-searchfunction/
- Published: 2021-01-08T10:00:00.000Z
- Updated: 2021-01-08T10:00:00.000Z
- Author: Ghost

Jekyll 따라하기의 목차입니다.

- [Jekyll 따라하기(0) - Jekyll Start](./jekyll-start)
- [Jekyll 따라하기(1) - Jekyll Setup](./jekyll-setup)
- [Jekyll 따라하기(2) - Jekyll Modify and Publish](./jekyll-modifyAndPublish)
- [Jekyll 따라하기(3) - Jekyll Web Font](./jekyll-webFont)
- [Jekyll 따라하기(4) - Highlighting with rouge](./jekyll-highlighting)
- [Jekyll 따라하기(5) - Search function with lunr.js](./jekyll-searchFunction)
- [Jekyll 따라하기(6) - Google Search Console](./jekyll-googleSearchConsole)
- [Jekyll 따라하기(7) - GitHub Gist](./jekyll-gitHubGist)
- [Jekyll 따라하기(8) - Travis CI](./jekyll-travisCI)

github blog 사용을 위한 Jykell Setup 과정입니다.

- Reference: https://moon9342.github.io/jekyll-search

---

1. search link 생성  
> \_includes/site-nav.html 에서 subscribe를 search로 변경
2. Search Page 설정  
> \_layouts/default.html 수정 \_includes/subscribe-form.html 수정 search.html 생성 및 수정
3. lunr.js 다운로드 및 설정  
> assets/js/lunr.js

---

lunr.js 추천코드 사용시 동작하지 않음.  
https://lunrjs.com/ 에서 다운로드 받아도 동작하지 않음.  
문제점 확인 중…