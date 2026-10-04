import json
import html
from datetime import datetime
import xml.etree.ElementTree as ET

def convert_json_to_blogger():
    json_path = "noahs-blog.ghost.2026-10-04-11-07-00.json"
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    posts = data["db"][0]["data"]["posts"]
    
    # Filter published posts (type == 'post' and status == 'published')
    published_posts = [p for p in posts if p.get("type") == "post" and p.get("status") == "published"]
    
    now_iso = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    
    xml_lines = [
        "<?xml version='1.0' encoding='UTF-8'?>",
        "<feed xmlns='http://www.w3.org/2005/Atom'",
        "      xmlns:openSearch='http://a9.com/-/spec/opensearch/1.1/'",
        "      xmlns:gd='http://schemas.google.com/g/2005'",
        "      xmlns:thr='http://purl.org/syndication/thread/1.0'>",
        "  <id>tag:blogger.com,1999:blog-ghost-json-export</id>",
        f"  <updated>{now_iso}</updated>",
        "  <title type='text'>Noah's Blog - Ghost JSON Export</title>"
    ]
    
    for idx, post in enumerate(published_posts, start=1):
        title = post.get("title", "Untitled")
        body = post.get("html", "") or ""
        pub_date_str = post.get("published_at", now_iso)
        
        try:
            dt = datetime.strptime(pub_date_str, "%Y-%m-%d %H:%M:%S")
            pub_date_iso = dt.strftime("%Y-%m-%dT%H:%M:%SZ")
        except Exception:
            pub_date_iso = now_iso
            
        clean_title = html.escape(title)
        clean_body = html.escape(body)
        
        entry = f"""  <entry>
    <id>tag:blogger.com,1999:blog-post-{idx}</id>
    <published>{pub_date_iso}</published>
    <updated>{pub_date_iso}</updated>
    <category scheme="http://www.blogger.com/atom/ns#" term="Tech"/>
    <title type='text'>{clean_title}</title>
    <content type='html'>{clean_body}</content>
    <author>
      <name>Noah</name>
    </author>
  </entry>"""
        xml_lines.append(entry)
        
    xml_lines.append("</feed>")
    
    xml_content = "\n".join(xml_lines)
    
    output_filename = "blogger-import.xml"
    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(xml_content)
        
    print(f"Successfully generated {output_filename} from JSON with {len(published_posts)} posts!")
    
    # Validate XML syntax
    try:
        ET.parse(output_filename)
        print("XML validation passed successfully!")
    except Exception as e:
        print(f"XML validation failed: {e}")

if __name__ == "__main__":
    convert_json_to_blogger()
