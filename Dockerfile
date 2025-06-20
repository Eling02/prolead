FROM node:18-alpine AS build
# FROM node:alpine3.13

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn run build

CMD yarn run build && yarn start
