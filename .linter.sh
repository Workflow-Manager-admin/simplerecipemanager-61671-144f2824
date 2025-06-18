#!/bin/bash
cd /home/kavia/workspace/code-generation/simplerecipemanager-61671-144f2824/simple_recipe_manager
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

