FROM nginx

RUN apt-get install curl -y && apt-get update && apt-get dist-upgrade -y

WORKDIR /etc/nginx/
COPY nginx.conf ./

WORKDIR /etc/nginx/conf.d
COPY default.conf ./

WORKDIR /usr/share/nginx/html
ADD web-content ./