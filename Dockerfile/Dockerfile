FROM nginx

RUN apt-get update && apt-get upgrade -y

WORKDIR /etc/nginx/conf.d
COPY default.conf ./

WORKDIR /usr/share/nginx
ADD web-content/* ./html