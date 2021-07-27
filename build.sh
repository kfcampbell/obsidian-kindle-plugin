#!/bin/bash
set -ex

npm install
npm run test
npm --prefix ./packages/kindle-plugin install ./packages/kindle-plugin
npm --prefix ./packages/kindle-server install ./packages/kindle-server
npm run build
# zip -r -j dev-kindle-plugin.zip dist
ls
mkdir -p ~/Dropbox/notes/.obsidian/plugins/obsidian-kindle-plugin-dev/
cp dist/manifest.json ~/Dropbox/notes/.obsidian/plugins/obsidian-kindle-plugin-dev/
cp dist/main.js ~/Dropbox/notes/.obsidian/plugins/obsidian-kindle-plugin-dev/
echo "Tag name: $(git tag --sort version:refname | tail -n 1)"
