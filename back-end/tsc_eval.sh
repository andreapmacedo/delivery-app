#!/bin/bash

npx -y tsc

if [ $? != 0 ]; then
  echo "Ocorreu um erro ao compilar o TypeScript."
  exit 1
fi
