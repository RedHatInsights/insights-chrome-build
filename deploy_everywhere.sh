#!/bin/bash

git checkout master
git pull

for environment in ci-beta ci-stable qa-beta qa-stable stage-beta stage-stable
do
    git checkout $environment
    git reset --hard master
    git push -f origin $environment
done

git checkout scripts
