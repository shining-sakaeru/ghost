import sqlite3
import uuid
from datetime import datetime

db_path = "content/data/ghost-local.db"
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

posts_data = [
    {
        "title": "[연재 1화] 오라클 서버에 Ghost CMS 구축하기: Source 'Magazine' 테마와 커스텀 스타일링",
        "slug": "series-1-oracle-ghost-source-theme",
        "html": """
<p>개발자 블로그를 직접 구축하고자 할 때, 가장 먼저 마주하는 고민은 <strong>"어떤 플랫폼을 선택하고 어디에 호스팅할 것인가"</strong>입니다. 미디엄(Medium), 티스토리, 벨로그 등 훌륭한 서비스들이 많지만, 나의 데이터에 대한 온전한 소유권(Data Portability)과 디자인 커스텀 자유도를 원한다면 <strong>Ghost CMS</strong>와 <strong>Oracle Cloud(오라클 클라우드) 서버</strong> 조합은 가장 매력적인 선택지 중 하나입니다.</p>

<p>이번 글에서는 오라클 클라우드 프리티어 환경에 Ghost CMS를 직접 설치하고, 공식 미니멀 테마인 <strong>Source</strong>를 적용한 뒤 감성적인 매거진 레이아웃과 커스텀 컬러링을 입히는 전 과정을 상세히 공유합니다.</p>

<hr>

<h2>1. 오라클 서버 환경 세팅과 Ghost CLI 설치</h2>
<p>오라클 클라우드 우분투(Ubuntu) 서버 환경에서 Ghost를 구동하려면 Node.js, MySQL(또는 SQLite), 그리고 Ghost 공식 관리 도구인 Ghost CLI가 필요합니다. 터미널에 접속하여 아래 명령어로 패키지를 준비합니다.</p>

<pre><code class="language-bash"># 시스템 패키지 업데이트 및 Node.js 설치 (Ghost 권장 버전 확인)
sudo apt update && sudo apt upgrade -y
sudo curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Ghost CLI 글로벌 설치
sudo npm install ghost-cli -g
</code></pre>

<p>서버에 Ghost 디렉토리를 만들고 설치를 진행할 때 가장 중요한 포인트는 <strong>URL 설정</strong>입니다. 외부 접속용 IP 주소(예: <code>http://64.110.107.153:2368/</code>)를 정확히 입력해야 나중에 링크 리다이렉트나 어바웃 페이지에서 404 에러를 방지할 수 있습니다. 또한, 오라클 VCN 보안 리스트와 우분투 방화벽(UFW)에서 2368 포트를 반드시 열어주어야 합니다.</p>

<pre><code class="language-bash"># UFW 방화벽 2368 포트 개방
sudo ufw allow 2368/tcp
sudo ufw allow OpenSSH
sudo ufw enable
</code></pre>

<p><em>참고 출처: <a href="https://ghost.org/docs/" target="_blank">Ghost Official Documentation</a>, <a href="https://www.oracle.com/cloud/free/" target="_blank">Oracle Cloud Free Tier Guide</a></em></p>

<hr>

<h2>2. Source 테마와 감각적인 매거진(Magazine) 레이아웃</h2>
<p>Ghost의 공식 테마인 <a href="https://github.com/TryGhost/Source" target="_blank"><strong>TryGhost/Source</strong></a>는 속도가 매우 빠르고 모던한 디자인을 제공합니다. 특히 헤더 스타일을 매거진 형태로 지정하면 블로그 메인 화면 상단에 추천(Featured) 포스트들이 멋지게 가로 배치됩니다.</p>

<p>테마의 매거진 레이아웃을 활성화하고 설정을 다듬기 위해 Ghost 관리자 대시보드(<code>/ghost/</code>)의 디자인 설정에서 Header style을 <strong>Magazine</strong>으로 선택합니다.</p>

<hr>

<h2>3. 세부 디자인 커스텀 (배경색, 폰트, 버튼 색상)</h2>
<p>기본 테마의 깔끔함 위에 나만의 개성을 더하기 위해 CSS 커스텀 스타일링을 적용했습니다. 요청하신 디자인 파라미터는 다음과 같습니다:</p>
<ul>
  <li><strong>배경색</strong>: 따뜻한 톤의 <code>#f7f2ed</code></li>
  <li><strong>폰트</strong>: 모던하고 깔끔한 <code>sans-serif</code></li>
  <li><strong>구독(Subscribe) 버튼 컬러</strong>: 차분한 포인트 컬러 <code>#7e7e44</code></li>
</ul>

<p>이러한 세심한 스타일링 조정은 방문자에게 전문적이면서도 아늑한 기술 블로그의 인상을 심어줍니다.</p>
""",
        "published_at": "2026-10-04 12:00:00",
        "featured": 1
    },
    {
        "title": "[연재 2화] Jekyll에서 Ghost로, 그리고 Google Blogger로: 포스트 유실 없는 마이그레이션 파이프라인",
        "slug": "series-2-jekyll-ghost-blogger-migration",
        "html": """
<p>오랫동안 운영해 온 블로그 플랫폼을 이사할 때 가장 큰 걱정은 <strong>"과거에 작성한 수많은 마크다운 포스트와 발행일자가 유실되지 않을까"</strong>하는 점입니다. 이번 프로젝트에서는 Jekyll 기반의 블로그 포스트를 Ghost로 이전한 후, 궁극적으로 구글 블로거(Blogger)까지 완벽하게 호환되도록 마이그레이션하는 데이터 주권(Data Portability) 파이프라인을 구축했습니다.</p>

<hr>

<h2>1. Jekyll 포스트의 Ghost 마이그레이션 원리</h2>
<p>기존 Jekyll 블로그의 포스트들은 프론트매터(Front Matter)에 제목, 작성일자, 태그 등이 포함된 Markdown 파일 형태입니다. Ghost는 이를 가져올 수 있는 강력한 임포트 기능을 제공합니다. 특히 과거 포스트의 발행일자(예: 2021년)가 그대로 유지되도록 데이터베이스의 <code>published_at</code> 필드를 정밀하게 매핑하는 것이 핵심이었습니다.</p>

<p><em>참고 출처: <a href="https://jekyllrb.com/docs/" target="_blank">Jekyll Documentation</a>, <a href="https://ghost.org/docs/migration/" target="_blank">Ghost Migration Guide</a></em></p>

<hr>

<h2>2. Google Blogger 호환 Atom Feed XML 변환 스크립트 작성</h2>
<p>특정 블로그 플랫폼에 종속되지 않고 언제든 데이터를 백업하고 이전할 수 있도록, Ghost SQLite DB(<code>content/data/ghost-local.db</code>)에서 발행된 포스트들을 읽어 구글 블로거 호환 Atom Feed XML(<code>blogger-import.xml</code>)로 변환해 주는 파이썬 자동화 스크립트를 직접 작성했습니다.</p>

<pre><code class="language-python">import sqlite3
import html
from datetime import datetime
import xml.etree.ElementTree as ET

def convert_ghost_to_blogger():
    db_path = "content/data/ghost-local.db"
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 발행된 포스트 조회
    posts = cursor.execute('''
        SELECT title, slug, html, published_at 
        FROM posts 
        WHERE type = 'post' AND status = 'published'
    ''').fetchall()
    conn.close()
    
    now_iso = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    
    xml_lines = [
        "&lt;?xml version='1.0' encoding='UTF-8'?&gt;",
        "&lt;feed xmlns='http://www.w3.org/2005/Atom'",
        "      xmlns:openSearch='http://a9.com/-/spec/opensearch/1.1/'",
        "      xmlns:gd='http://schemas.google.com/g/2005'",
        "      xmlns:thr='http://purl.org/syndication/thread/1.0'&gt;",
        "  &lt;id&gt;tag:blogger.com,1999:blog-ghost-export&lt;/id&gt;",
        f"  &lt;updated&gt;{now_iso}&lt;/updated&gt;",
        "  &lt;title type='text'&gt;Noah's Blog Export&lt;/title&gt;"
    ]
    
    for idx, post in enumerate(posts, start=1):
        title, slug, body, pub_date_str = post
        
        try:
            dt = datetime.strptime(pub_date_str, "%Y-%m-%d %H:%M:%S")
            pub_date_iso = dt.strftime("%Y-%m-%dT%H:%M:%SZ")
        except Exception:
            pub_date_iso = now_iso
            
        clean_title = html.escape(title or "Untitled")
        clean_body = html.escape(body or "")
        
        entry = f\"\"\"  &lt;entry&gt;
    &lt;id&gt;tag:blogger.com,1999:blog-post-{idx}&lt;/id&gt;
    &lt;published&gt;{pub_date_iso}&lt;/published&gt;
    &lt;updated&gt;{pub_date_iso}&lt;/updated&gt;
    &lt;category scheme="http://www.blogger.com/atom/ns#" term="Tech"/&gt;
    &lt;title type='text'&gt;{clean_title}&lt;/title&gt;
    &lt;content type='html'&gt;{clean_body}&lt;/content&gt;
    &lt;author&gt;&lt;name&gt;Noah&lt;/name&gt;&lt;/author&gt;
  &lt;/entry&gt;\"\"\"
        xml_lines.append(entry)
        
    xml_lines.append("&lt;/feed&gt;")
    
    with open("blogger-import.xml", "w", encoding="utf-8") as f:
        f.write("\n".join(xml_lines))
        
    print("Successfully generated blogger-import.xml!")

if __name__ == "__main__":
    convert_ghost_to_blogger()
</code></pre>

<p>이 스크립트는 제목과 HTML 본문을 <code>html.escape</code>로 안전하게 이스케이프 처리하고, Google Blogger Atom API 스펙에 정확히 부합하는 XML 구조를 생성합니다. 생성된 파일은 블로거 설정 메뉴의 <strong>[콘텐츠 가져오기]</strong>를 통해 단 몇 초 만에 업로드할 수 있습니다.</p>

<p><em>참고 출처: <a href="https://developers.google.com/blogger/docs/3.0/reference" target="_blank">Google Blogger API v3 Reference</a>, <a href="https://docs.python.org/3/library/xml.etree.elementtree.html" target="_blank">Python ElementTree Docs</a></em></p>
""",
        "published_at": "2026-10-04 12:05:00",
        "featured": 1
    },
    {
        "title": "[연재 3화] GitHub Pages 정적 배포 자동화와 Google AdSense 및 `ads.txt` 연동",
        "slug": "series-3-github-pages-adsense-ads-txt",
        "html": """
<p>서버 유지비용 걱정 없이 블로그를 영구적으로 운영하고 수익화까지 연결하는 하이브리드 아키텍처는 많은 개발자들의 로망입니다. 이번 글에서는 동적 CMS인 Ghost의 관리 편의성을 누리면서도, 최종 결과물은 <strong>GitHub Pages</strong>를 통해 무료로 서비스하고 <strong>Google AdSense</strong>를 연동하는 방법을 정리합니다.</p>

<hr>

<h2>1. Wget을 활용한 정적 사이트 추출 (Static Site Generation)</h2>
<p>오라클 서버에서 구동되는 동적 Ghost 사이트(<code>http://64.110.107.153:2368/</code>)를 완벽한 정적 HTML/CSS 파일들로 변환하기 위해 <code>wget</code> 크롤링 도구를 활용합니다.</p>

<pre><code class="language-bash"># 로컬 Ghost 서버를 크롤링하여 docs/ 디렉토리에 정적 파일 생성
wget -r -nH -P docs -E -T 5 -np -k http://64.110.107.153:2368/
</code></pre>

<p>이 명령어는 홈, 태그, 개별 포스트, 어바웃 페이지를 모두 다운로드하고 내부 링크를 상대/절대 경로(<code>-k</code>)로 깔끔하게 변환해 줍니다. 생성된 <code>docs/</code> 폴더를 <a href="https://github.com/shining-sakaeru/shining-sakaeru.github.io" target="_blank">GitHub Pages 레포지토리</a>의 루트에 푸시하면 고성능 정적 블로그가 완성됩니다.</p>

<p><em>참고 출처: <a href="https://www.gnu.org/software/wget/manual/wget.html" target="_blank">GNU Wget Manual</a>, <a href="https://docs.github.com/en/pages" target="_blank">GitHub Pages Documentation</a></em></p>

<hr>

<h2>2. Google AdSense 자동 광고 및 `ads.txt` 연동</h2>
<p>블로그 수익화를 위한 구글 애드센스 승인과 연동을 위해 두 가지 필수 작업을 진행했습니다.</p>
<ul>
  <li><strong>애드센스 자동 광고 스크립트 주입</strong>: Source 테마의 템플릿 파일인 <code>default.hbs</code>의 <code>&lt;head&gt;</code> 영역에 아래 스크립트를 삽입합니다.
<pre><code class="language-html">&lt;script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8445796587035649" crossorigin="anonymous"&gt;&lt;/script&gt;
</code></pre>
  </li>
  <li><strong><code>ads.txt</code> 파일 배치</strong>: 정적 사이트 루트 및 GitHub Pages 루트 디렉토리에 아래 내용으로 <code>ads.txt</code>를 생성합니다.
<pre><code class="language-text">google.com, pub-8445796587035649, DIRECT, f08c47fec0942fa0
</code></pre>
  </li>
</ul>

<p><em>참고 출처: <a href="https://support.google.com/adsense/answer/7532445" target="_blank">Google AdSense Help - Guide to ads.txt</a></em></p>
""",
        "published_at": "2026-10-04 12:10:00",
        "featured": 1
    },
    {
        "title": "[연재 4화] 개발자 블로그 구축 삽질 일지: 404 에러부터 애드센스 크롤링 지연까지 트러블슈팅 모음",
        "slug": "series-4-troubleshooting-faq",
        "html": """
<p>모든 개발 과정이 단번에 척척 진행되면 좋겠지만, 실제 구축 과정에서 마주치는 수많은 에러와 삽질이야말로 다른 이들에게 가장 큰 자산이 됩니다. 이번 글에서는 오늘 블로그를 구축하면서 겪었던 대표적인 트러블슈팅 3가지를 공유합니다.</p>

<hr>

<h2>1. 홈 및 어바웃 페이지 404 에러와 무한 리다이렉트 지옥</h2>
<p>로컬 테스트 환경과 오라클 클라우드 외부 IP 환경을 오가다 보니, 블로그 메인에서 글을 클릭하거나 어바웃 페이지로 이동할 때 <code>404 Not Found</code>가 발생하거나 리다이렉트 루프에 빠지는 현상이 발생했습니다.</p>
<ul>
  <li><strong>원인</strong>: Ghost 내부 설정(데이터베이스 <code>settings</code> 및 설정 파일)의 <code>url</code> 값이 <code>localhost</code>로 고정되어 있었기 때문입니다.</li>
  <li><strong>해결</strong>: 서버의 실제 외부 접근 IP 주소인 <code>http://64.110.107.153:2368/</code>로 정확히 설정하고 Ghost를 재시작합니다.
<pre><code class="language-bash">ghost config url http://64.110.107.153:2368/
ghost restart
</code></pre>
  </li>
</ul>

<hr>

<h2>2. "Admin 바 위젯이 갑자기 사라졌어요!"</h2>
<p>블로그를 둘러보다 갑자기 화면 하단에 있던 관리자/포스트 수정 퀵 메뉴(Admin Bar)가 보이지 않아 당황했습니다.</p>
<ul>
  <li><strong>원인</strong>: Ghost 서버 재시작 및 브라우저 세션 갱신으로 인해 관리자 로그인 상태가 일시적으로 풀렸기 때문입니다.</li>
  <li><strong>해결</strong>: <code>http://64.110.107.153:2368/ghost/</code>에 로그인하여 세션 쿠키를 갱신하면 블로그 메인 하단에 관리자 위젯이 마법처럼 다시 나타납니다.</li>
</ul>

<hr>

<h2>3. 구글 애드센스 `ads.txt` "찾을 수 없음" 경고 대처법</h2>
<p><code>ads.txt</code> 파일을 정확히 업로드하고 브라우저 주소창에 직접 접속했을 때도 텍스트가 정상 출력되는데, 애드센스 콘솔에서는 계속 <em>"찾을 수 없음"</em> 상태로 떠서 마음을 졸였습니다.</p>
<ul>
  <li><strong>결론</strong>: 이는 파일 경로 오류가 아니라 **구글 애드센스 크롤러(로봇)의 방문 주기** 때문입니다. 애드센스 봇은 실시간이 아닌 보통 <strong>24시간 ~ 48시간(최대 수일)</strong>의 텀을 두고 사이트를 재방문하여 크롤링합니다. 브라우저에서 텍스트가 잘 확인된다면 안심하고 기다리시면 자연스럽게 해결됩니다.</li>
</ul>

<p><em>참고 출처: <a href="https://ghost.org/docs/faq/" target="_blank">Ghost FAQ & Troubleshooting</a>, <a href="https://support.google.com/adsense/answer/10532" target="_blank">Google AdSense Crawler FAQ</a></em></p>
""",
        "published_at": "2026-10-04 12:15:00",
        "featured": 1
    }
]

for p in posts_data:
    existing = cursor.execute("SELECT id FROM posts WHERE slug = ?", (p["slug"],)).fetchone()
    if existing:
        cursor.execute("""
            UPDATE posts 
            SET title = ?, html = ?, published_at = ?, featured = ?, status = 'published'
            WHERE slug = ?
        """, (p["title"], p["html"], p["published_at"], p["featured"], p["slug"]))
    else:
        post_id = uuid.uuid4().hex[:24]
        post_uuid = str(uuid.uuid4())
        cursor.execute("""
            INSERT INTO posts (
                id, uuid, title, slug, html, status, type, visibility, 
                email_recipient_filter, created_at, updated_at, published_at, 
                featured, show_title_and_feature_image, published_by
            )
            VALUES (?, ?, ?, ?, ?, 'published', 'post', 'public', 'all', datetime('now'), datetime('now'), ?, ?, 1, '6ac1d55a8703e103a33a1c08')
        """, (post_id, post_uuid, p["title"], p["slug"], p["html"], p["published_at"], p["featured"]))

conn.commit()
conn.close()
print("Successfully inserted/updated series posts with all required fields in ghost database!")
