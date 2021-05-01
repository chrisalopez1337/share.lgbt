FROM node:14.13-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN apk add --no-cache make gcc g++ python && \
  npm install && \
  apk del make gcc g++ python

COPY . .

EXPOSE 3000
EXPOSE 3001

CMD [ "npm", "start" ]
