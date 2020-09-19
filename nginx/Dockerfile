FROM nginx:mainline-alpine

WORKDIR /etc/nginx

RUN apk add openssl

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./sslcert/nginx-selfsigned.crt /etc/nginx/conf.d/nginx-selfsigned.crt
COPY ./sslcert/nginx-selfsigned.key /etc/nginx/conf.d/nginx-selfsigned.key

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

EXPOSE 80 443

# TODO: Wait for the app to available before starting
#CMD /wait && nginx -s reload
