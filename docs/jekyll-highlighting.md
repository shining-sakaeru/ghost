> ## Content Index
> Fetch the complete content index at: http://localhost:2368/llms.txt
> Use this file to discover other available public pages before exploring further.

# Jekyll 따라하기(4) - Highlighting with rouge
- URL: http://localhost:2368/jekyll-highlighting/
- Published: 2026-10-04T06:03:49.000Z
- Updated: 2026-10-04T06:03:49.000Z
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

- Reference: https://moon9342.github.io/jekyll-rouge

---

1. install rouge  
> gem install rouge
2. 사용 가능한 style 확인  
> rougify help style
3. theme css 생성  
> rougify style monokai.sublime > assets/css/syntax.css
4. \_layouts/default.html 설정  
> make CSS to Post interface

---

특이사항 없이 잘 작동.