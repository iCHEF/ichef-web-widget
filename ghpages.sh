#!/bin/sh -xe

# Clear and re-create the deploy directory
rm -rf dist || exit 0

# Git clone
git clone -b gh-pages --single-branch git@github.com:iCHEF/ichef-web-widget.git dist

# Clean up files from last build(except .git)
find ./dist/* ! -path "./deploy/.git/*" ! -name ".git" | xargs rm -rf

# Build dist files
yarn build

# Commit and push
pushd dist
git add .
git commit -m "Update widget"
git push origin gh-pages
popd
