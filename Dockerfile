FROM node:12.16.2-alpine

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0

RUN mkdir -p  /www
WORKDIR /www

RUN apk update && \
    apk upgrade && \
    apk add git

COPY package.json ./

RUN yarn
