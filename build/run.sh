#!/bin/bash

echo "Starting the app..."

# Check if .env exists
FILE=.env
if [ ! -f '$FILE' ]; then
  echo "Running from" $(pwd)
  echo "$FILE does not exist, creating from template"
  cp -vf .env.template .env
fi

# Build
docker-compose up