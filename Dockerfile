FROM node:14.15.0-alpine AS build

WORKDIR /workdir

COPY app ./

RUN npm install && cd server && npm install

CMD npm start