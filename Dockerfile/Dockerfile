FROM nginx

WORKDIR /etc/nginx/conf.d
COPY default.conf ./

WORKDIR /usr/share/nginx
COPY ./web-content/* ./html