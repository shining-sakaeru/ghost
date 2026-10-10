#!/bin/bash
set -e
PROJECT_DIR="/home/openhands/workspace/project/ghost"
cd "$PROJECT_DIR"

echo "1. Checking if Ghost is running on port 2368..."
if ! python3 -c '
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
exit(0 if s.connect_ex(("127.0.0.1", 2368)) == 0 else 1)
' 2>/dev/null; then
    echo "Ghost is not running. Starting Ghost..."
    NODE_ENV=development nohup node versions/6.67.0/index.js > /tmp/ghost.log 2>&1 &
    sleep 35
fi

echo "2. Regenerating static site into docs/ using wget..."
rm -rf docs
mkdir -p docs
wget -r -nH -P docs -E -T 5 -np -k http://127.0.0.1:2368/ || true
cp ads.txt docs/ads.txt

echo "3. Committing and pushing to shining-sakaeru/ghost..."
git config --local user.name "openhands"
git config --local user.email "openhands@all-hands.dev"
git add -A
git commit -m "Auto-deploy: Update static docs and posts" || echo "No changes to commit in ghost repo"
git remote set-url origin https://${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/shining-sakaeru/ghost.git
git push origin main || git push origin master || true

echo "4. Pushing docs to shining-sakaeru/shining-sakaeru.github.io..."
TMP_DIR="/tmp/gh-pages-deploy"
rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"
cp -r docs/* "$TMP_DIR/"
cp ads.txt "$TMP_DIR/ads.txt"
cd "$TMP_DIR"
git init
git config user.name "shining-sakaeru"
git config user.email "deployer@local"
git add -A
git commit -m "Auto-deploy: Update GitHub Pages from Ghost blog"
git branch -M main
git remote add origin https://${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/shining-sakaeru/shining-sakaeru.github.io.git
git push -u origin main --force
git push origin main:master --force

echo "🚀 Automated deployment completed successfully!"
