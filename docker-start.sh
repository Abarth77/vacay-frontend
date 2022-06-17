#!/bin/bash

docker run -p 8080:8080 -it -v $(pwd):/var/www/frontend vacay-frontend