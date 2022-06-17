FROM node:16.15.1-alpine

COPY . /var/www/frontend

WORKDIR /var/www/frontend

RUN npm install

CMD [ "npm", "run", "serve" ]