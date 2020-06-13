FROM php:7.4-alpine

RUN apk update \
    && apk --no-cache add sqlite-dev sqlite \
    && docker-php-ext-install pdo_sqlite \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html/

COPY . /var/www/html/
