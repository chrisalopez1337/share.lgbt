FROM node:14.13-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --production

COPY . .

EXPOSE 1337

CMD [ "npm", "start" ]
