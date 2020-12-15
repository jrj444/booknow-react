#!/usr/bin/env bash

yarn build

cd build

git init

git add .

git commit -m 'deploy'

git remote add origin git@github.com:jrj444/booknow-react.git

git push -f git@github.com:jrj444/booknow-react.git main:gh-pages

cd -