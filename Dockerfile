FROM nginx:alpine

RUN apk update && apk upgrade && apk add bash

WORKDIR /etc/nginx/
COPY nginx.conf ./

WORKDIR /etc/nginx/conf.d
COPY default.conf ./

WORKDIR /usr/share/nginx/html
ADD web-content ./