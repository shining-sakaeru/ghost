#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
GHOST_URL="${GHOST_URL:-http://172.17.0.1:2368}"
PAGES_REPOSITORY="https://github.com/shining-sakaeru/shining-sakaeru.github.io.git"
PAGES_BRANCH="main"
PAGES_URL="${PAGES_URL:-https://shining-sakaeru.github.io}"
ASKPASS=""
command -v wget >/dev/null
command -v git >/dev/null
command -v python3 >/dev/null

cd "$PROJECT_DIR"
if ! curl --fail --silent --show-error --max-time 10 "$GHOST_URL/" -o /dev/null; then
    printf 'Ghost is not reachable at %s\n' "$GHOST_URL" >&2
    exit 1
fi

STAMP="$(date +%Y%m%d-%H%M%S)"
STAGE="$PROJECT_DIR/.docs-export-$STAMP"
URLS="$PROJECT_DIR/.ghost-export-urls-$STAMP"
WGET_LOG="${TMPDIR:-/tmp}/ghost-export-wget-$STAMP.log"
PUBLIC_URL="$(python3 - "$PROJECT_DIR/config.production.json" <<'PY'
import json
import sys
with open(sys.argv[1], encoding='utf-8') as config_file:
    print(json.load(config_file)['url'].rstrip('/'))
PY
)"
mkdir "$STAGE"
trap 'rm -f "$URLS" "$WGET_LOG"; if [[ -n "$ASKPASS" ]]; then rm -f "$ASKPASS"; fi' EXIT

python3 - "$GHOST_URL" "$PUBLIC_URL" >"$URLS" <<'PY'
import sys
import xml.etree.ElementTree as ET
from urllib.request import Request, urlopen
from urllib.parse import urlsplit, urlunsplit

base_url, public_url = (value.rstrip('/') for value in sys.argv[1:])
internal, public = urlsplit(base_url), urlsplit(public_url)
if not internal.scheme or not internal.netloc or not public.scheme or not public.netloc:
    raise SystemExit('GHOST_URL and config.production.json url must be absolute URLs.')

def fetch_xml(url):
    request = Request(url, headers={'User-Agent': 'ghost-static-export/1.0'})
    with urlopen(request, timeout=15) as response:
        if response.status != 200:
            raise SystemExit(f'Sitemap request failed with HTTP {response.status}.')
        return ET.fromstring(response.read())

def local_url(location):
    parsed = urlsplit(location)
    if parsed.netloc != public.netloc:
        raise SystemExit('Ghost sitemap canonical origin does not match config.production.json.')
    return urlunsplit((internal.scheme, internal.netloc, parsed.path, parsed.query, ''))

def tag(element):
    return element.tag.rsplit('}', 1)[-1]

index = fetch_xml(base_url + '/sitemap.xml')
sitemap_files = {}
for child in index:
    if tag(child) != 'sitemap':
        continue
    loc = next((node.text for node in child if tag(node) == 'loc' and node.text), None)
    if not loc:
        continue
    sitemap_path = urlsplit(loc).path
    sitemap_files[sitemap_path.rsplit('/', 1)[-1]] = local_url(loc)

required = {'sitemap-posts.xml', 'sitemap-pages.xml'}
if not required.issubset(sitemap_files):
    raise SystemExit('Ghost sitemap index is missing the posts or pages sitemap.')

routes = set()
route_counts = {'posts': 0, 'pages': 0, 'authors': 0, 'tags': 0}
for filename, sitemap_url in sitemap_files.items():
    child_root = fetch_xml(sitemap_url)
    category = next((name for name in route_counts if filename == f'sitemap-{name}.xml'), None)
    for url_node in child_root:
        if tag(url_node) != 'url':
            continue
        loc = next((node.text for node in url_node if tag(node) == 'loc' and node.text), None)
        if loc:
            routes.add(local_url(loc))
            if category:
                route_counts[category] += 1

print(base_url + '/')
for url in sorted(routes):
    print(url)
print(
    'Oracle sitemap routes: '
    + ', '.join(f'{name}={count}' for name, count in route_counts.items()),
    file=sys.stderr,
)
PY
printf 'Exporting the home page and Oracle Ghost sitemap routes...\n'
if wget --recursive --level=1 --page-requisites --adjust-extension \
    --no-parent --no-host-directories --quiet --timeout=15 --tries=2 --directory-prefix="$STAGE" \
    --input-file="$URLS" 2>"$WGET_LOG"; then
    :
else
    status=$?
    if [[ "$status" -ne 8 ]]; then
        cat "$WGET_LOG" >&2
        exit "$status"
    fi
    printf 'WARNING: wget returned HTTP errors for legacy media references; export continues and the image-path check reports missing files below.\n' >&2
fi

# Fetch srcset variants too; wget may not discover all of them. Use the private
# host-gateway address for fetching even when Ghost emits its public canonical URL.
python3 - "$STAGE" "$GHOST_URL" "$PUBLIC_URL" >"$URLS" <<'PY'
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import urljoin, urlsplit

root, base = Path(sys.argv[1]), sys.argv[2].rstrip('/') + '/'
public_origin = urlsplit(sys.argv[3]).netloc
class Images(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = set()
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key == 'srcset' and value:
                for item in value.split(','):
                    candidate = item.strip().split()[0]
                    parsed = urlsplit(urljoin(base, candidate))
                    if parsed.netloc in (urlsplit(base).netloc, public_origin) and parsed.path.startswith('/content/images/'):
                        self.urls.add(base.rstrip('/') + parsed.path + (('?' + parsed.query) if parsed.query else ''))
parser = Images()
for page in root.rglob('*.html'):
    try:
        parser.feed(page.read_text(encoding='utf-8'))
    except (OSError, UnicodeError):
        pass
print('\n'.join(sorted(parser.urls)))
PY
if [[ -s "$URLS" ]]; then
    if ! wget --no-host-directories --page-requisites --adjust-extension --quiet --timeout=15 --tries=2 \
        --directory-prefix="$STAGE" --input-file="$URLS" 2>"$WGET_LOG"; then
        cat "$WGET_LOG" >&2
        exit 1
    fi
fi
# wget preserves query strings in filenames; browsers request the path without them.
python3 - "$STAGE" <<'PY'
from pathlib import Path
import sys

root = Path(sys.argv[1])
for path in sorted(root.rglob('*?*'), key=lambda item: len(item.parts), reverse=True):
    if not path.is_file():
        continue
    target = path.with_name(path.name.split('?', 1)[0])
    if target == path:
        continue
    target.parent.mkdir(parents=True, exist_ok=True)
    if not target.exists():
        path.rename(target)
    else:
        path.unlink()
PY
python3 - "$STAGE" <<'PY'
from pathlib import Path
import sys
root = Path(sys.argv[1])
font_link = '<style>@font-face{font-family:"Noto Sans KR";font-style:normal;font-weight:400;font-display:swap;src:url("/assets/fonts/notosanskr-400.ttf") format("truetype");}html body,html body *{font-family:"Noto Sans KR",Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;}</style>'
for page in root.rglob('*.html'):
    try:
        content = page.read_text(encoding='utf-8')
    except (OSError, UnicodeError):
        continue
    if 'fonts.googleapis.com/css2?family=Noto+Sans+KR' not in content:
        content = content.replace('</head>', font_link + '\n</head>', 1)
    page.write_text(content, encoding='utf-8')
for css in root.rglob('*.css'):
    try:
        content = css.read_text(encoding='utf-8')
    except (OSError, UnicodeError):
        continue
    content = content.replace('--font-sans:Inter,', '--font-sans:Inter, "Noto Sans KR",')
    css.write_text(content, encoding='utf-8')
PY
python3 - "$STAGE" "$PUBLIC_URL" <<'PY'
from pathlib import Path
import re
import sys

root, public_origin = Path(sys.argv[1]), sys.argv[2].rstrip('/')
for page in root.rglob('*.html'):
    try:
        content = page.read_text(encoding='utf-8')
    except (OSError, UnicodeError):
        continue
    content = re.sub(
        r'(?P<prefix>\bsrcset=")(?:[^\"]*?)"',
        lambda match: match.group(0).replace(public_origin + '/content/images/', '/content/images/'),
        content,
    )
    content = re.sub(
        r'(?P<prefix>\bsrc=")' + re.escape(public_origin) + r'(/content/images/[^\"]*)"',
        r'src="\2"',
        content,
    )
    page.write_text(content, encoding='utf-8')
PY
python3 - "$STAGE" "$PUBLIC_URL" "$PAGES_URL" <<'PY'
from pathlib import Path
import sys

root, ghost_origin, pages_origin = Path(sys.argv[1]), sys.argv[2].rstrip('/'), sys.argv[3].rstrip('/')
for page in root.rglob('*.html'):
    try:
        content = page.read_text(encoding='utf-8')
    except (OSError, UnicodeError):
        continue
    page.write_text(content.replace(ghost_origin, pages_origin), encoding='utf-8')
PY
python3 - "$STAGE" "$GHOST_URL" "$PAGES_URL" <<'PY'
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import urljoin, urlsplit

root = Path(sys.argv[1]).resolve()
internal = urlsplit(sys.argv[2])
public = urlsplit(sys.argv[3])
checked, missing = set(), set()
class Images(HTMLParser):
    def __init__(self, page):
        super().__init__()
        self.page = page
    def handle_starttag(self, tag, attrs):
        if tag not in ('img', 'source'):
            return
        page_url = f'{internal.scheme}://{internal.netloc}/{self.page.relative_to(root).as_posix()}'
        for key, value in attrs:
            if not value:
                continue
            candidates = [value]
            if key == 'srcset':
                candidates = [item.strip().split()[0] for item in value.split(',') if item.strip()]
            elif key != 'src':
                continue
            for candidate in candidates:
                resolved = urlsplit(urljoin(page_url, candidate))
                if resolved.netloc and resolved.netloc not in (internal.netloc, public.netloc):
                    continue
                path = (root / resolved.path.lstrip('/')).resolve()
                if not path.is_relative_to(root):
                    continue
                checked.add(path)
                if not path.is_file():
                    missing.add(path)
for page in root.rglob('*.html'):
    try:
        parser = Images(page)
        parser.feed(page.read_text(encoding='utf-8'))
    except (OSError, UnicodeError):
        continue
print(f'Image path check: {len(checked) - len(missing)} local files present, {len(missing)} missing local reference(s).')
if missing:
    for path in sorted(missing):
        print(f'WARNING: missing exported image: {path.relative_to(root)}', file=sys.stderr)
PY
[[ ! -f "$PROJECT_DIR/ads.txt" ]] || cp -a "$PROJECT_DIR/ads.txt" "$STAGE/ads.txt"
if [[ -d "$PROJECT_DIR/assets/fonts" ]]; then
    mkdir -p "$STAGE/assets/fonts"
    cp -a "$PROJECT_DIR/assets/fonts/." "$STAGE/assets/fonts/"
fi

if [[ -e "$PROJECT_DIR/docs" ]]; then
    mv "$PROJECT_DIR/docs" "$PROJECT_DIR/docs.backup-$STAMP"
fi
mv "$STAGE" "$PROJECT_DIR/docs"
touch "$PROJECT_DIR/docs/.nojekyll"
printf 'Static export generated: %s/docs\n' "$PROJECT_DIR"

if [[ "${DEPLOY_DRY_RUN:-0}" == "1" ]]; then
    printf '%s\n' 'DEPLOY_DRY_RUN=1: GitHub Pages push skipped.'
    exit 0
fi
if [[ -z "${GITHUB_PERSONAL_ACCESS_TOKEN:-}" ]]; then
    printf '%s\n' 'GITHUB_PERSONAL_ACCESS_TOKEN is required.' >&2
    exit 1
fi

ASKPASS="$PROJECT_DIR/.git-askpass-$STAMP"
cat >"$ASKPASS" <<'ASKPASS_EOF'
#!/bin/sh
case "$1" in
    *Username*) printf '%s\n' 'x-access-token' ;;
    *Password*) printf '%s\n' "$GITHUB_PERSONAL_ACCESS_TOKEN" ;;
    *) exit 1 ;;
esac
ASKPASS_EOF
chmod 700 "$ASKPASS"
WORK="$(mktemp -d "${TMPDIR:-/tmp}/ghost-pages.XXXXXX")"
GIT_ASKPASS="$ASKPASS" GIT_TERMINAL_PROMPT=0 \
    git clone --depth 1 --branch "$PAGES_BRANCH" "$PAGES_REPOSITORY" "$WORK/repo"
PAGES_DIR="$WORK/repo"
cd "$PAGES_DIR"

# Keep a local copy of the current Pages tree before replacing it with the complete export.
tar -czf "$WORK/pages-before-sync.tar.gz" --exclude='./.git' -C "$PAGES_DIR" .
find "$PAGES_DIR" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -r -- {} +
cp -a "$PROJECT_DIR/docs/." "$PAGES_DIR/"
git add --all
if git diff --cached --quiet; then
    printf '%s\n' 'No GitHub Pages changes to publish.'
    exit 0
fi
git config user.name "openhands"
git config user.email "openhands@all-hands.dev"
git commit -m "Deploy Ghost static export" -m "Co-authored-by: openhands <openhands@all-hands.dev>"
GIT_ASKPASS="$ASKPASS" GIT_TERMINAL_PROMPT=0 git push origin "$PAGES_BRANCH"
printf 'Static export published. Previous Pages tree backup: %s\n' "$WORK/pages-before-sync.tar.gz"
