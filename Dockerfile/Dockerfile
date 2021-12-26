FROM nginx

WORKDIR /etc/nginx/conf.d
COPY default.conf ./

WORKDIR /usr/share/nginx

ADD ./web-content/css/ ./html
ADD ./web-content/50x.html/ ./html
ADD ./web-content/index.html/ ./html