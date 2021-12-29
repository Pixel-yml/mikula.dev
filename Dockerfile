FROM nginx:alpine

RUN mkdir -p /run/nginx

WORKDIR /etc/nginx/
COPY nginx.conf ./

WORKDIR /etc/nginx/conf.d
COPY default.conf ./

WORKDIR /usr/share/nginx/html
ADD web-content ./