> ## Content Index
> Fetch the complete content index at: http://localhost:2368/llms.txt
> Use this file to discover other available public pages before exploring further.

# Jekyll 따라하기(2) - Jekyll Modify and Publish
- URL: http://localhost:2368/jekyll-modifyandpublish/
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

- Reference: https://moon9342.github.io/jekyll-struct

---

1. Jasper2 테마 install  
> http://jekyllthemes.org/themes/jasper2/ Download & Move to folder you want
2. Modify *config.yml*  
> Jasper2 테마 main 설정 파일 수정
3. Modify authors.yml  
> 저자 정보 수정
4. Modify tags.yml  
> tag 설정
5. Modify \_include/navigation.html  
> Page navigation 설정
6. \_posts  
> 2022-01-08-file-name.md
7. archive.md / author\_archive.md  
> Posting 시간순 정렬
8. Content list  
> \-table-of-contents.html 생성 및 css 설정
9. Gulp 설치 및 gulpfile.js 설정  
> CSS 연동
10. Github Push

> git push origin master push 하면 10-20분 뒤 홈페이지에서 확인 가능

---

gulp 설치 시 알수 없는 에러들이 많았는데,  
googling으로 해결이 불가능 했습니다.  
해결책으로 관련 package 싹 밀고 재설치 하니 잘 동작했습니다.