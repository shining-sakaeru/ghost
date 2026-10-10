import re
import sqlite3
import uuid
from datetime import UTC, datetime
from pathlib import Path
from shutil import copy2

DB_PATH = Path(__file__).parent / "content/data/ghost-local.db"
AUTHOR_ID = "6ac1d55a8703e103a33a1c08"

DATE_UPDATES = {
    "coming-soon": "2026-09-01 09:00:00",
    "series-1-oracle-ghost-source-theme": "2026-09-04 09:00:00",
    "series-2-jekyll-ghost-blogger-migration": "2026-09-07 09:00:00",
    "series-3-github-pages-adsense-ads-txt": "2026-09-11 09:00:00",
    "series-4-troubleshooting-faq": "2026-09-15 09:00:00",
}

POSTS = [
    {
        "title": "[OpenHands 실전 1화] OpenAI API 키 없이 ChatGPT Plus/Pro 구독 연결하기",
        "slug": "openhands-chatgpt-subscription-login",
        "published_at": "2026-09-18 09:00:00",
        "excerpt": "OpenAI Platform API 과금과 ChatGPT 구독의 차이를 짚고, OpenHands SDK에서 OAuth로 Codex 모델을 연결하는 방법을 정리합니다.",
        "html": """
<p>OpenHands에 OpenAI 모델을 연결하려면 당연히 <code>OPENAI_API_KEY</code>와 Platform API 결제가 필요하다고 생각했습니다. 하지만 OpenHands SDK에는 별도의 구독 로그인 기능이 있습니다. <strong>ChatGPT Plus 또는 Pro 구독으로 OAuth 인증한 뒤 Codex 모델을 사용할 수 있고, 이 경로에서는 OpenAI Platform API 크레딧을 소비하지 않습니다.</strong></p>

<p>여기서 먼저 구분해야 할 점이 있습니다. ChatGPT Plus/Pro 구독과 OpenAI Platform API 사용료는 서로 다른 상품입니다. 구독 로그인이 지원된다는 말은 ChatGPT의 모든 모델을 제한 없이 API처럼 호출한다는 뜻이 아니라, OpenHands가 지원하는 구독 인증 경로로 Codex 모델에 접근한다는 뜻입니다.</p>

<hr>
<h2>1. 공식적으로 지원되는 구독 로그인</h2>
<p>OpenHands 공식 문서에 따르면 현재 구독 인증을 지원하는 첫 번째 제공자는 OpenAI입니다. SDK가 OAuth PKCE 인증, 로컬 자격 증명 캐시, 토큰 자동 갱신을 처리합니다.</p>

<pre><code class="language-python">from openhands.sdk import LLM

llm = LLM.subscription_login(
    vendor="openai",
    model="gpt-5.2-codex",
)

print(f"Using subscription: {llm.is_subscription}")
</code></pre>

<p>첫 실행에서는 브라우저가 열리고 OpenAI 계정 인증을 진행합니다. 인증이 끝나면 정보가 <code>~/.openhands/auth/</code> 아래에 캐시되어 다음 실행부터 재사용됩니다. 서버처럼 브라우저를 자동으로 열 수 없는 환경에서는 <code>open_browser=False</code>로 설정하고 출력된 URL을 직접 열 수 있습니다.</p>

<pre><code class="language-python">llm = LLM.subscription_login(
    vendor="openai",
    model="gpt-5.2-codex",
    open_browser=False,
)
</code></pre>

<h2>2. API 방식과 구독 방식의 차이</h2>
<table>
<thead><tr><th>구분</th><th>Platform API</th><th>ChatGPT 구독 로그인</th></tr></thead>
<tbody>
<tr><td>인증</td><td>API 키</td><td>브라우저 OAuth</td></tr>
<tr><td>과금</td><td>API 사용량 기반</td><td>Plus/Pro 구독 정책과 한도</td></tr>
<tr><td>자격 증명</td><td>환경 변수 또는 Secret</td><td>로컬 인증 캐시</td></tr>
<tr><td>대상 모델</td><td>API 계정에서 허용된 모델</td><td>OpenHands가 안내하는 구독용 Codex 모델</td></tr>
</tbody>
</table>

<h2>3. 반드시 확인할 점</h2>
<ul>
<li>활성화된 ChatGPT Plus 또는 Pro 구독이 필요합니다.</li>
<li>지원 모델 목록은 SDK 버전과 서비스 정책에 따라 바뀔 수 있으므로 공식 문서를 확인해야 합니다.</li>
<li><code>~/.openhands/auth/</code>는 인증 정보이므로 Git에 커밋하거나 다른 사람에게 공유하면 안 됩니다.</li>
<li>계정을 바꾸거나 캐시가 오래되었다면 <code>force_login=True</code>로 새 인증을 시작할 수 있습니다.</li>
</ul>

<p>API 키를 발급하고 별도 사용료를 관리하는 방법만 알고 있었다면 꽤 큰 차이입니다. 개인 개발 환경에서는 기존 ChatGPT 구독을 활용하고, 서비스 운영이나 세밀한 비용·권한 통제가 필요한 곳에서는 Platform API를 사용하는 식으로 목적에 맞게 선택할 수 있습니다.</p>

<p><em>참고: <a href="https://docs.openhands.dev/sdk/guides/llm-subscriptions" target="_blank" rel="noopener">OpenHands SDK — LLM Subscriptions</a></em></p>
""",
    },
    {
        "title": "[OpenHands 실전 2화] 구독 OAuth 인증, 캐시와 헤드리스 서버에서 다루기",
        "slug": "openhands-subscription-oauth-headless",
        "published_at": "2026-09-24 09:00:00",
        "excerpt": "OpenHands 구독 로그인의 OAuth 흐름과 인증 캐시, 재로그인 및 헤드리스 서버 운영 시 주의점을 살펴봅니다.",
        "html": """
<p>구독 로그인 한 줄만 보면 단순하지만, 실제로 서버에서 OpenHands를 운용하려면 인증 정보의 수명과 저장 위치를 이해해야 합니다. 이번 글에서는 <code>LLM.subscription_login()</code> 뒤에서 어떤 흐름이 일어나고, 로컬 PC가 아닌 서버에서는 무엇을 주의해야 하는지 정리합니다.</p>

<hr>
<h2>1. OAuth PKCE 인증 흐름</h2>
<ol>
<li>OpenHands SDK가 로그인 URL과 PKCE 검증 값을 생성합니다.</li>
<li>사용자가 브라우저에서 OpenAI 계정으로 로그인하고 접근을 승인합니다.</li>
<li>SDK가 인증 결과를 받아 로컬 자격 증명으로 저장합니다.</li>
<li>이후 요청에서는 저장된 인증 정보를 사용하고, 만료 시 자동 갱신을 시도합니다.</li>
</ol>

<p>이 방식의 장점은 API 키 문자열을 직접 복사해 코드에 넣지 않아도 된다는 것입니다. 그렇다고 인증 정보가 사라지는 것은 아닙니다. 자격 증명은 기본적으로 <code>~/.openhands/auth/</code>에 저장되므로 파일 권한과 백업 정책을 신경 써야 합니다.</p>

<h2>2. 재로그인과 계정 전환</h2>
<pre><code class="language-python">from openhands.sdk import LLM

llm = LLM.subscription_login(
    vendor="openai",
    model="gpt-5.2-codex",
    force_login=True,
)
</code></pre>

<p><code>force_login=True</code>는 기존 캐시를 그대로 재사용하지 않고 인증 과정을 다시 시작할 때 유용합니다. 계정을 전환하거나 토큰 갱신이 반복해서 실패할 때 먼저 시도할 수 있습니다. 인증 디렉터리를 직접 삭제하기 전에는 필요한 다른 프로필이 함께 들어 있는지 확인하는 것이 안전합니다.</p>

<h2>3. 브라우저 없는 서버에서 인증하기</h2>
<pre><code class="language-python">llm = LLM.subscription_login(
    vendor="openai",
    model="gpt-5.2-codex",
    open_browser=False,
)
</code></pre>

<p>SSH로 접속한 서버나 컨테이너에서는 GUI 브라우저가 없을 수 있습니다. 이때 자동 실행을 끄면 터미널에 인증 URL이 표시됩니다. 해당 URL을 신뢰할 수 있는 개인 기기의 브라우저에서 열어 인증을 마치면 됩니다.</p>

<h2>4. 운영 체크리스트</h2>
<ul>
<li>인증 캐시 디렉터리를 저장소와 정적 웹 루트에서 제외합니다.</li>
<li>컨테이너를 매번 새로 만들 경우 인증 캐시를 안전한 볼륨에 보관할지 결정합니다.</li>
<li>여러 사용자가 같은 서버 계정을 공유하지 않도록 분리합니다.</li>
<li>로그에 OAuth URL, 토큰, 쿠키가 출력되지 않는지 확인합니다.</li>
<li><code>llm.is_subscription</code>으로 의도한 인증 방식이 활성화됐는지 확인합니다.</li>
</ul>

<p>구독 로그인은 개발자의 초기 진입 장벽을 낮춰 주지만, 서버에 저장되는 자격 증명은 여전히 비밀 정보입니다. “API 키가 없으니 Secret 관리도 필요 없다”가 아니라, <strong>Secret의 형태와 저장 위치가 달라졌다</strong>고 이해하는 편이 정확합니다.</p>

<p><em>참고: <a href="https://docs.openhands.dev/sdk/guides/llm-subscriptions" target="_blank" rel="noopener">OpenHands SDK — LLM Subscriptions</a>, <a href="https://github.com/OpenHands/software-agent-sdk/blob/main/examples/01_standalone_sdk/35_subscription_login.py" target="_blank" rel="noopener">공식 실행 예제</a></em></p>
""",
    },
    {
        "title": "[OpenHands 실전 3화] Invalid input.id 오류: 모델 전환 후 대화가 막힌 이유와 해결",
        "slug": "openhands-invalid-input-id-fix",
        "published_at": "2026-10-02 09:00:00",
        "excerpt": "Responses API 대화 이력의 ID가 다른 모델·제공자 사이에서 재사용될 때 발생하는 input.id 오류를 분석하고 복구합니다.",
        "html": """
<p>ChatGPT 구독 모델을 OpenHands에 연결한 뒤 기존 대화를 이어 가는 과정에서 <code>input.id</code> 검증 오류를 만났습니다. 새 질문 자체는 평범했지만, 이전 대화 이력에 포함된 메시지 ID가 새 요청과 호환되지 않아 요청 전체가 거절되는 문제였습니다.</p>

<pre><code class="language-text">Invalid 'input[N].id': '...'.
Expected an ID that begins with 'msg'.
</code></pre>

<hr>
<h2>1. 왜 현재 입력이 아니라 과거 이력에서 실패할까?</h2>
<p>OpenAI Responses API의 입력은 단순 문자열뿐 아니라 이전 응답의 메시지, reasoning, function call 같은 항목을 다시 포함할 수 있습니다. 이 항목의 <code>id</code>는 아무 문자열이나 넣는 사용자 정의 필드가 아닙니다. API가 발급한 객체 종류에 맞는 접두사와 유효한 식별자를 기대합니다.</p>

<p>문제는 서로 다른 모델 프로필이나 호환 API를 오가며 같은 대화를 재생할 때 생길 수 있습니다. 이전 제공자가 만든 ID, OpenHands 내부 이벤트 ID 또는 클라이언트가 임의로 만든 ID가 OpenAI 입력 항목의 <code>id</code>로 전달되면, OpenAI는 자신이 발급한 메시지 ID로 인정하지 않습니다. 그래서 오류 위치가 <code>input[N].id</code>로 표시됩니다.</p>

<h2>2. 해결 원칙: 가짜 ID를 새 ID처럼 꾸미지 않는다</h2>
<p>가장 중요한 원칙은 잘못된 ID 앞에 억지로 <code>msg_</code>를 붙이지 않는 것입니다. 접두사만 맞춘다고 실제 서버 객체가 되는 것은 아닙니다. 클라이언트가 재구성한 과거 메시지는 <code>id</code>를 제거하고 역할과 콘텐츠만 보내거나, 오염된 이력을 재사용하지 않고 새 대화를 시작해야 합니다.</p>

<pre><code class="language-python">def sanitize_replayed_item(item: dict) -&gt; dict:
    cleaned = dict(item)
    if cleaned.get("type") == "message":
        item_id = cleaned.get("id")
        if item_id and not item_id.startswith("msg"):
            cleaned.pop("id")
    return cleaned
</code></pre>

<p>실제 OpenHands 사용 과정에서는 다음 순서로 복구했습니다.</p>
<ol>
<li>사용할 LLM 프로필과 인증 방식을 먼저 확정합니다.</li>
<li>모델 또는 제공자를 바꾼 직후 오류가 시작됐다면 기존 대화를 새 모델에 그대로 재생하지 않습니다.</li>
<li>새 대화를 생성해 같은 작업을 이어 가고, 필요한 맥락은 텍스트 요약으로 전달합니다.</li>
<li>직접 어댑터를 구현했다면 재생하는 메시지의 비호환 <code>id</code>를 제거합니다.</li>
<li>도구 호출 ID와 메시지 ID는 서로 의미가 다르므로 일괄 치환하지 않습니다.</li>
</ol>

<h2>3. 재발 방지를 위한 설계</h2>
<ul>
<li><strong>프로필별 대화 분리:</strong> 제공자나 모델 계열이 바뀌면 새 conversation을 사용합니다.</li>
<li><strong>서버 발급 ID만 보존:</strong> 클라이언트 이벤트 ID를 Responses API 객체 ID로 재사용하지 않습니다.</li>
<li><strong>대화 이식은 요약으로:</strong> 장기 대화는 원시 이벤트 전체보다 검증된 텍스트 요약이 안전합니다.</li>
<li><strong>오류 인덱스 확인:</strong> <code>input[N]</code>의 N번째 항목을 출력하되 토큰이나 개인 정보는 마스킹합니다.</li>
<li><strong>SDK 업데이트:</strong> 구독 인증과 Responses API 호환 로직은 빠르게 변하므로 재현 전 최신 변경 사항을 확인합니다.</li>
</ul>

<h2>4. 이번 문제에서 얻은 교훈</h2>
<p><code>input.id</code> 오류는 “질문 내용이 잘못됐다”는 뜻이 아니었습니다. 대화 이력을 영속화하고 다른 실행 경로로 다시 보내는 과정에서 <strong>제공자 소유 식별자와 애플리케이션 내부 식별자를 구분하지 못한 상태 관리 문제</strong>였습니다. 모델을 바꾸는 기능을 만들 때 프롬프트 호환성만 볼 것이 아니라, 메시지 ID와 reasoning 데이터도 다른 제공자에 그대로 이식 가능한지 확인해야 합니다.</p>

<p>환경과 SDK 버전에 따라 오류를 만든 항목은 달라질 수 있습니다. 따라서 무조건 모든 ID를 삭제하기보다 오류가 가리킨 입력 항목의 타입과 출처를 확인하고, 비호환 이력만 제외하는 방식이 안전합니다.</p>

<p><em>참고: <a href="https://platform.openai.com/docs/api-reference/responses" target="_blank" rel="noopener">OpenAI Responses API Reference</a>, <a href="https://docs.openhands.dev/sdk/guides/llm-subscriptions" target="_blank" rel="noopener">OpenHands LLM Subscriptions</a></em></p>
""",
    },
    {
        "title": "[OpenHands 실전 4화] Ghost 글 발행부터 정적 배포까지 자동화하며 배운 점",
        "slug": "openhands-ghost-webhook-deploy-automation",
        "published_at": "2026-10-10 09:00:00",
        "excerpt": "OpenHands로 Ghost 게시 흐름을 자동화하며 확인한 웹훅, 중복 실행, 작성자 관계 및 운영 보안 체크리스트를 기록합니다.",
        "html": """
<p>ChatGPT 구독 연결과 <code>input.id</code> 문제를 해결한 뒤에는 그 과정을 Ghost에 기록하고 정적 사이트까지 반영하는 흐름을 자동화했습니다. 글을 작성하는 것보다 어려웠던 부분은 “한 번 실행되는 스크립트”를 “반복 실행해도 안전한 운영 자동화”로 만드는 일이었습니다.</p>

<hr>
<h2>1. 자동화 흐름</h2>
<pre><code class="language-text">Ghost에서 글 발행 또는 수정
  → post.published / post.updated 웹훅
  → 로컬 리스너가 이벤트 수신
  → 정적 사이트 생성 스크립트 실행
  → 결과 검증 후 배포
</code></pre>

<p>Ghost의 동적 관리 화면을 글쓰기 도구로 사용하고, 공개 사이트는 정적 HTML로 배포하면 관리 편의성과 운영 비용을 함께 잡을 수 있습니다. 하지만 웹훅 요청을 받자마자 셸 스크립트를 실행하는 최소 구현은 테스트에는 편해도 운영에는 부족합니다.</p>

<h2>2. 실제로 확인한 데이터 무결성 문제</h2>
<p>게시물을 SQLite에 직접 넣을 때 <code>posts</code> 행만 생성하면 제목과 본문은 저장되지만, <code>posts_authors</code> 관계가 빠질 수 있습니다. 이 상태에서는 Ghost가 구조화된 메타데이터를 만들며 작성자의 <code>name</code>을 읽다가 오류를 낼 수 있습니다.</p>

<pre><code class="language-text">Cannot read properties of null (reading 'name')
</code></pre>

<p>따라서 직접 데이터 작업을 해야 한다면 게시물 본문뿐 아니라 작성자 관계, 태그 관계, 발행 상태와 시간까지 하나의 트랜잭션으로 처리해야 합니다. 가능하다면 Ghost Admin API를 사용하는 것이 더 안전합니다.</p>

<h2>3. 운영용 웹훅에 필요한 보호 장치</h2>
<ul>
<li><strong>요청 검증:</strong> 공유 시크릿 또는 서명을 검증하고 허용한 이벤트만 처리합니다.</li>
<li><strong>중복 실행 방지:</strong> 파일 락이나 작업 큐로 동시에 여러 배포가 실행되지 않게 합니다.</li>
<li><strong>빠른 응답:</strong> 웹훅에는 먼저 성공 여부를 응답하고 무거운 배포는 별도 작업으로 넘깁니다.</li>
<li><strong>최소 권한:</strong> 리스너 계정에 저장소와 배포에 필요한 권한만 부여합니다.</li>
<li><strong>실패 가시성:</strong> 시작·종료·exit code를 기록하고 실패 시 알림을 보냅니다.</li>
<li><strong>배포 검증:</strong> 생성된 HTML에서 새 글 URL, 제목, 광고 스크립트 같은 필수 항목을 검사합니다.</li>
</ul>

<h2>4. 날짜도 콘텐츠 데이터다</h2>
<p>여러 글을 한 번에 이전하거나 자동 생성하면 같은 날짜와 비슷한 시각에 몰릴 수 있습니다. 기능적으로는 문제가 없어도 독자에게는 모든 글이 하루에 작성된 것처럼 보이고, 아카이브 흐름도 부자연스럽습니다. 이번에는 기존 글을 실제 작업 순서에 맞춰 9월 1일부터 15일까지 나누고, OpenHands 시리즈도 9월 18일부터 오늘까지 단계별로 배치했습니다.</p>

<p>중요한 점은 표시용 날짜만 바꾸는 것이 아니라 <code>published_at</code>을 기준으로 정렬 결과, RSS, sitemap, 정적 페이지를 함께 검증하는 것입니다. 이미 외부에 배포된 글의 날짜를 바꾸면 검색 엔진과 피드 리더에 미치는 영향도 고려해야 합니다.</p>

<h2>5. 오늘의 결론</h2>
<p>OpenHands를 이용하면 조사, 코드 작성, 데이터 보정, 검수 같은 작업을 한 흐름으로 연결할 수 있습니다. 하지만 자동화가 강력할수록 경계도 명확해야 합니다. 인증 정보는 코드와 분리하고, 외부 요청은 검증하며, 데이터 변경은 백업과 트랜잭션으로 보호하고, 원격 배포는 결과를 확인한 뒤 명시적으로 실행하는 것이 좋습니다.</p>

<p><em>참고: <a href="https://ghost.org/docs/webhooks/" target="_blank" rel="noopener">Ghost Webhooks</a>, <a href="https://ghost.org/docs/admin-api/" target="_blank" rel="noopener">Ghost Admin API</a>, <a href="https://docs.openhands.dev/sdk/guides/security" target="_blank" rel="noopener">OpenHands Security &amp; Action Confirmation</a></em></p>
""",
    },
]


def plaintext(html: str) -> str:
    text = re.sub(r"<pre><code.*?</code></pre>", " ", html, flags=re.DOTALL)
    text = re.sub(r"<[^>]+>", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def relation_id() -> str:
    return uuid.uuid4().hex[:24]


def ensure_author(cursor: sqlite3.Cursor, post_id: str) -> None:
    exists = cursor.execute(
        "SELECT 1 FROM posts_authors WHERE post_id = ? AND author_id = ?",
        (post_id, AUTHOR_ID),
    ).fetchone()
    if not exists:
        cursor.execute(
            "INSERT INTO posts_authors (id, post_id, author_id, sort_order) VALUES (?, ?, ?, 0)",
            (relation_id(), post_id, AUTHOR_ID),
        )


def ensure_tag(cursor: sqlite3.Cursor) -> str:
    tag = cursor.execute("SELECT id FROM tags WHERE slug = 'openhands'").fetchone()
    if tag:
        return tag[0]
    tag_id = relation_id()
    now = datetime.now(UTC).strftime("%Y-%m-%d %H:%M:%S")
    cursor.execute(
        """
        INSERT INTO tags (id, name, slug, description, visibility, created_at, updated_at)
        VALUES (?, 'OpenHands', 'openhands', 'OpenHands 설치, 모델 연결, 문제 해결과 자동화 기록', 'public', ?, ?)
        """,
        (tag_id, now, now),
    )
    return tag_id


def ensure_post_tag(cursor: sqlite3.Cursor, post_id: str, tag_id: str) -> None:
    exists = cursor.execute(
        "SELECT 1 FROM posts_tags WHERE post_id = ? AND tag_id = ?", (post_id, tag_id)
    ).fetchone()
    if not exists:
        cursor.execute(
            "INSERT INTO posts_tags (id, post_id, tag_id, sort_order) VALUES (?, ?, ?, 0)",
            (relation_id(), post_id, tag_id),
        )


def publish() -> None:
    backup = DB_PATH.with_suffix(f".db.backup-{datetime.now().strftime('%Y%m%d-%H%M%S')}")
    copy2(DB_PATH, backup)

    connection = sqlite3.connect(DB_PATH)
    try:
        cursor = connection.cursor()
        cursor.execute("BEGIN IMMEDIATE")

        for slug, published_at in DATE_UPDATES.items():
            cursor.execute(
                "UPDATE posts SET published_at = ?, updated_at = ? WHERE slug = ? AND type = 'post'",
                (published_at, published_at, slug),
            )
            if cursor.rowcount != 1:
                raise RuntimeError(f"Expected one existing post for {slug}, found {cursor.rowcount}")

        tag_id = ensure_tag(cursor)
        for post in POSTS:
            existing = cursor.execute(
                "SELECT id FROM posts WHERE slug = ?", (post["slug"],)
            ).fetchone()
            body_text = plaintext(post["html"])
            reading_time = max(1, round(len(body_text.split()) / 200))
            if existing:
                post_id = existing[0]
                cursor.execute(
                    """
                    UPDATE posts
                    SET title = ?, html = ?, plaintext = ?, custom_excerpt = ?, status = 'published',
                        type = 'post', visibility = 'public', published_at = ?, updated_at = ?,
                        published_by = ?, featured = 0, reading_time = ?, show_title_and_feature_image = 1
                    WHERE id = ?
                    """,
                    (
                        post["title"], post["html"].strip(), body_text, post["excerpt"],
                        post["published_at"], post["published_at"], AUTHOR_ID, reading_time, post_id,
                    ),
                )
            else:
                post_id = relation_id()
                cursor.execute(
                    """
                    INSERT INTO posts (
                        id, uuid, title, slug, html, comment_id, plaintext, featured, type, status,
                        visibility, email_recipient_filter, created_at, updated_at, published_at,
                        published_by, custom_excerpt, reading_time, show_title_and_feature_image
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, 0, 'post', 'published', 'public', 'all',
                              ?, ?, ?, ?, ?, ?, 1)
                    """,
                    (
                        post_id, str(uuid.uuid4()), post["title"], post["slug"], post["html"].strip(),
                        post_id, body_text, post["published_at"], post["published_at"],
                        post["published_at"], AUTHOR_ID, post["excerpt"], reading_time,
                    ),
                )
            ensure_author(cursor, post_id)
            ensure_post_tag(cursor, post_id, tag_id)

        for slug in [*DATE_UPDATES, "tailscale-server-security-setup"]:
            row = cursor.execute("SELECT id FROM posts WHERE slug = ?", (slug,)).fetchone()
            if row:
                ensure_author(cursor, row[0])

        connection.commit()
        print(f"Published {len(POSTS)} OpenHands posts and updated {len(DATE_UPDATES)} dates.")
        print(f"Backup: {backup}")
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


if __name__ == "__main__":
    publish()
