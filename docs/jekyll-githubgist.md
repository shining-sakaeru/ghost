> ## Content Index
> Fetch the complete content index at: http://64.110.107.153:2368/llms.txt
> Use this file to discover other available public pages before exploring further.

# Jekyll 따라하기(7) - GitHub Gist
- URL: http://64.110.107.153:2368/jekyll-githubgist/
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

- Reference: https://moon9342.github.io/jekyll-gist

---

1. Install jekyll-gist  
> gem install jekyll-gist
2. \_config.yml 설정  
> plugins에 jekyll-gist 추가
3. gist 적용  
> gist link copy  
> 형식은 다음과 같음  
```  
<script src="https://gist.github.com/userID/url.js"></script>  
```  
> 아래 처럼 사용.  
```  
<noscript><pre>404: Not Found</pre></noscript><script src="https://gist.github.com/userID/url.js"> </script>  
```

---

특이사항 없이 잘 동작합니다.