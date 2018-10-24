#!/bin/bash

git checkout master
git pull

for environment in ci-beta ci-stable qa-beta qa-stable stage-beta stage-stable
do
    git checkout $environment
    git reset --hard master
done

git checkout scripts
