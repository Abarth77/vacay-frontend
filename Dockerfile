FROM node:16.15.1-alpine

COPY . /var/www/frontend

WORKDIR /var/www/frontend

ENV NODE_ENV=development

RUN npm install

CMD [ "npm", "run", "serve" ]