#!/usr/bin/env sh

set -e

yarn build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'App deploy'
git push -f git@github.com:Eduardo-H/ignite-coffee-delivery.git main:gh-pages

cd -