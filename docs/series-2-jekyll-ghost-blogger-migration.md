> ## Content Index
> Fetch the complete content index at: http://64.110.107.153:2368/llms.txt
> Use this file to discover other available public pages before exploring further.

# [연재 2화] Jekyll에서 Ghost로, 그리고 Google Blogger로: 포스트 유실 없는 마이그레이션 파이프라인
- URL: http://64.110.107.153:2368/series-2-jekyll-ghost-blogger-migration/
- Published: 2026-10-04T12:05:00.000Z
- Updated: 2026-10-04T13:19:46.000Z

오랫동안 운영해 온 블로그 플랫폼을 이사할 때 가장 큰 걱정은 **"과거에 작성한 수많은 마크다운 포스트와 발행일자가 유실되지 않을까"**하는 점입니다. 이번 프로젝트에서는 Jekyll 기반의 블로그 포스트를 Ghost로 이전한 후, 궁극적으로 구글 블로거(Blogger)까지 완벽하게 호환되도록 마이그레이션하는 데이터 주권(Data Portability) 파이프라인을 구축했습니다.

---

## 1\. Jekyll 포스트의 Ghost 마이그레이션 원리

기존 Jekyll 블로그의 포스트들은 프론트매터(Front Matter)에 제목, 작성일자, 태그 등이 포함된 Markdown 파일 형태입니다. Ghost는 이를 가져올 수 있는 강력한 임포트 기능을 제공합니다. 특히 과거 포스트의 발행일자(예: 2021년)가 그대로 유지되도록 데이터베이스의 `published_at` 필드를 정밀하게 매핑하는 것이 핵심이었습니다.

*참고 출처: [Jekyll Documentation](https://jekyllrb.com/docs/?ref=64.110.107.153), [Ghost Migration Guide](https://ghost.org/docs/migration/?ref=64.110.107.153)*

---

## 2\. Google Blogger 호환 Atom Feed XML 변환 스크립트 작성

특정 블로그 플랫폼에 종속되지 않고 언제든 데이터를 백업하고 이전할 수 있도록, Ghost SQLite DB(`content/data/ghost-local.db`)에서 발행된 포스트들을 읽어 구글 블로거 호환 Atom Feed XML(`blogger-import.xml`)로 변환해 주는 파이썬 자동화 스크립트를 직접 작성했습니다.

```python
import sqlite3
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
        "<?xml version='1.0' encoding='UTF-8'?>",
        "<feed xmlns='http://www.w3.org/2005/Atom'",
        "      xmlns:openSearch='http://a9.com/-/spec/opensearch/1.1/'",
        "      xmlns:gd='http://schemas.google.com/g/2005'",
        "      xmlns:thr='http://purl.org/syndication/thread/1.0'>",
        "  <id>tag:blogger.com,1999:blog-ghost-export</id>",
        f"  <updated>{now_iso}</updated>",
        "  <title type='text'>Noah's Blog Export</title>"
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
        
        entry = f"""  <entry>
    <id>tag:blogger.com,1999:blog-post-{idx}</id>
    <published>{pub_date_iso}</published>
    <updated>{pub_date_iso}</updated>
    <category scheme="http://www.blogger.com/atom/ns#" term="Tech"/>
    <title type='text'>{clean_title}</title>
    <content type='html'>{clean_body}</content>
    <author><name>Noah</name></author>
  </entry>"""
        xml_lines.append(entry)
        
    xml_lines.append("</feed>")
    
    with open("blogger-import.xml", "w", encoding="utf-8") as f:
        f.write("
".join(xml_lines))
        
    print("Successfully generated blogger-import.xml!")

if __name__ == "__main__":
    convert_ghost_to_blogger()

```

이 스크립트는 제목과 HTML 본문을 `html.escape`로 안전하게 이스케이프 처리하고, Google Blogger Atom API 스펙에 정확히 부합하는 XML 구조를 생성합니다. 생성된 파일은 블로거 설정 메뉴의 **\[콘텐츠 가져오기\]**를 통해 단 몇 초 만에 업로드할 수 있습니다.

*참고 출처: [Google Blogger API v3 Reference](https://developers.google.com/blogger/docs/3.0/reference?ref=64.110.107.153), [Python ElementTree Docs](https://docs.python.org/3/library/xml.etree.elementtree.html?ref=64.110.107.153)*