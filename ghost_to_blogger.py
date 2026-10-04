import sqlite3
import html
import os
from datetime import datetime
import xml.etree.ElementTree as ET

def convert_ghost_to_blogger():
    db_path = "content/data/ghost-local.db"
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Fetch published posts
    posts = cursor.execute("""
        SELECT id, title, slug, html, published_at 
        FROM posts 
        WHERE type = 'post' AND status = 'published'
    """).fetchall()
    
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
        "  <title type='text'>Noah's Lab Blog Export</title>"
    ]
    
    for idx, post in enumerate(posts, start=1):
        post_id, title, slug, body, pub_date_str = post
        
        # Format date to ISO-8601 (YYYY-MM-DDTHH:MM:SSZ)
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
        
    print(f"Successfully generated {output_filename} with {len(posts)} posts!")
    
    # Validate XML syntax
    try:
        ET.parse(output_filename)
        print("XML validation passed successfully!")
    except Exception as e:
        print(f"XML validation failed: {e}")

if __name__ == "__main__":
    convert_ghost_to_blogger()
