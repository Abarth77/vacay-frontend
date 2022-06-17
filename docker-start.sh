#!/bin/bash

imageExists="$(docker inspect --type=image vacay-frontend)"

if [[ $imageExists == "" ]]; 
then
  docker build -t vacay-frontend .
else
    echo "Skipping build, image already exists"
fi

docker run -p 8080:8080 -it -v $(pwd):/var/www/frontend vacay-frontend