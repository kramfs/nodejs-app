#!/bin/bash

echo "Starting docker-compose build..."

randomdata=`openssl rand -base64 6`

# Check if .env exists
FILE=.env
if [ ! -f '$FILE' ]; then
  echo "Running from" $(pwd)
  echo "$FILE does not exist, creating from template"
  cp -vf .env.template .env
fi

# Build
docker-compose build