FROM frankenphp/php:8.1

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    zip \
    git \
    curl \
    unzip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Set working directory
WORKDIR /var/www/html

# Copy project
COPY . /var/www/html

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Laravel dependencies
RUN composer install

# Set permissions
RUN chown -R www-data:www-data /var/www/html

CMD ["frankenphp"]
