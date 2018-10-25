#!/bin/bash
set -e

git fetch --all
git checkout master
git reset --hard origin

for environment in ci-beta ci-stable qa-beta qa-stable #stage-beta stage-stable
do
    git checkout $environment
    git reset --hard master
    git push -f origin $environment
done

git checkout scripts
