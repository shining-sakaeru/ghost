import sqlite3
import uuid
from datetime import datetime

db_path = "content/data/ghost-local.db"
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

title = "[개발일지] Tailscale을 활용한 서버 보안 강화기: 방화벽 오픈 없이 안전하게 서비스 접속하기"
slug = "tailscale-server-security-setup"
feature_image = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
published_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")

html = """
<p><img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80" alt="Cybersecurity and VPN Splash Image" class="kg-image"/></p>

<p>개인 서버(Oracle Cloud)나 로컬 개발 환경에 다양한 웹 서비스(Ghost 블로그, API 서버, 예약 시스템 등)를 구축하다 보면 가장 민감하게 마주하는 문제점이 바로 <strong>"보안(Security)"</strong>입니다. 외부 노트북에서 서버에 접속하기 위해 2368 포트나 8001 포트를 그대로 공인 IP에 노출시키자니 보안 위협이 신경 쓰이고, 방화벽을 닫자니 개발과 테스트가 막히는 딜레마에 빠지게 됩니다.</p>

<p>이번 글에서는 <code>reservation_camping</code> 프로젝트를 배포하고 보안 설정을 다듬는 과정에서 겪었던 좌충우돌을 바탕으로, <strong>Tailscale(테일스케일)</strong>을 도입해 복잡한 포트 포워딩이나 VPN 장비 설정 없이 안전하게 사내 가상 사설망(Mesh VPN)을 구축하고 서비스를 안전하게 보호한 경험을 공유합니다.</p>

<hr>

<h2>1. 왜 직접 포트를 여는 방식은 위험할까?</h2>
<p>서버를 운영할 때 무심코 특정 포트를 공인 IP(예: <code>64.110.107.153:포트번호</code>)로 전면 개방하면 수많은 문제가 발생합니다:</p>
<ul>
  <li><strong>무차별 대입 공격 (Brute-force Attack)</strong>: 봇(Bot)들이 공인 IP 포트 스캔을 통해 SSH 로그인이나 관리자 페이지를 지속적으로 타격합니다.</li>
  <li><strong>인증되지 않은 접근</strong>: HTTP 서비스의 경우 HTTPS나 별도의 인증 레이어가 없으면 데이터가 평문으로 노출될 위험이 있습니다.</li>
</ul>

<p>안전한 접속을 위해 SSH 터널링이나 전통적인 OpenVPN을 고려해 보았으나, 설정이 지나치게 복잡하고 방화벽 규칙 관리 번거로움이 있었습니다.</p>

<p><em>참고 출처: <a href="https://tailscale.com/kb/what-is-tailscale" target="_blank">Tailscale What is Tailscale?</a></em></p>

<hr>

<h2>2. Tailscale(테일스케일)이란?</h2>
<p><strong>Tailscale</strong>은 전 세계 어디서나 내 기기들을 하나의 안전한 사설망으로 묶어주는 **Zero-config Mesh VPN** 솔루션입니다. 현대적인 암호화 프로토콜인 **WireGuard®**를 기반으로 동작하여 설정이 매우 직관적이고 빠릅니다.</p>
<ul>
  <li>공인 IP를 외부에 노출하지 않고도 내 노트북과 오라클 서버 간 1:1 암호화 터널 생성</li>
  <li>NAT Traversal 기술을 통해 공유기나 방화벽 뒤에 숨어 있는 서버와도 완벽한 P2P 통신 지원</li>
  <li>Google, GitHub, Microsoft 등 안전한 계정 인증(SSO) 연동</li>
</ul>

<p><em>참고 출처: <a href="https://www.wireguard.com/" target="_blank">WireGuard Official Website</a>, <a href="https://tailscale.com/docs/" target="_blank">Tailscale Documentation</a></em></p>

<hr>

<h2>3. Tailscale 적용 및 보안 설정 실습 가이드</h2>
<p>오라클 서버(Ubuntu)와 외부 노트북에 Tailscale을 설치하고 안전하게 연결하는 실습 단계는 다음과 같습니다.</p>

<h3>Step 1: 오라클 서버 및 노트북에 Tailscale 설치</h3>
<p>우분투 서버 터미널에서 공식 원라인 설치 명령어를 실행합니다.</p>
<pre><code class="language-bash"># 오라클 서버(Ubuntu)에 Tailscale 설치
curl -fsSL https://tailscale.com/install.sh | sh

# Tailscale 데몬 시작 및 인증 (브라우저 로그인 링크가 출력됨)
sudo tailscale up
</code></pre>

<h3>Step 2: 테일스케일 네트워크(Tailnet) 확인</h3>
<p>설치가 완료되면 각 기기마다 고유한 사설 IP(예: <code>100.x.x.x</code>)가 부여됩니다. 관리자 콘솔에서 기기들이 서로 연결된 것을 확인할 수 있습니다.</p>
<pre><code class="language-bash"># 연결된 테일스케일 기기 목록 및 사설 IP 확인
tailscale status
</code></pre>

<h3>Step 3: 방화벽을 닫고 테일스케일 IP로만 서비스 접속하기</h3>
<p>이제 공인 IP를 통한 외부 접근은 방화벽(UFW)에서 모두 차단(Drop)하고, 오직 Tailscale 사설 IP를 통해서만 서비스 포트(2368, 8001 등)에 접근하도록 보안 정책을 강화합니다.</p>
<pre><code class="language-bash"># UFW 기본 정책 설정 및 Tailscale 인터페이스(tailscale0) 허용
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow in on tailscale0 to any port 2368 proto tcp
sudo ufw allow in on tailscale0 to any port 8001 proto tcp
sudo ufw allow OpenSSH
sudo ufw enable
</code></pre>

<hr>

<h2>4. 적용 후 소감 및 결론</h2>
<p>좌충우돌 끝에 Tailscale을 적용한 결과, 외부 공인 IP로 불필요한 트래픽이 유입되던 보안 취약점이 말끔히 해소되었습니다. 외부 노트북에서는 항상 안전하게 암호화된 Tailscale 사설망을 통해서만 서버 서비스와 VS Code 에디터에 접근할 수 있게 되어, 개발 편의성과 보안성 두 마리 토끼를 모두 잡을 수 있었습니다.</p>

<p>개인 서버나 개발용 인프라를 운영하면서 보안에 고민이 많으신 개발자분들께 Tailscale 도입을 강력히 추천합니다!</p>
"""

existing = cursor.execute("SELECT id FROM posts WHERE slug = ?", (slug,)).fetchone()
if existing:
    cursor.execute("""
        UPDATE posts 
        SET title = ?, html = ?, feature_image = ?, published_at = ?, featured = 1, status = 'published'
        WHERE slug = ?
    """, (title, html, feature_image, published_at, slug))
    print("Updated existing Tailscale post.")
else:
    post_id = uuid.uuid4().hex[:24]
    post_uuid = str(uuid.uuid4())
    cursor.execute("""
        INSERT INTO posts (
            id, uuid, title, slug, html, feature_image, status, type, visibility, 
            email_recipient_filter, created_at, updated_at, published_at, 
            featured, show_title_and_feature_image, published_by
        )
        VALUES (?, ?, ?, ?, ?, ?, 'published', 'post', 'public', 'all', datetime('now'), datetime('now'), ?, 1, 1, '6ac1d55a8703e103a33a1c08')
    """, (post_id, post_uuid, title, slug, html, feature_image, published_at))
    print("Inserted new Tailscale post.")

conn.commit()
conn.close()
