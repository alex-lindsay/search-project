CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `phone_label` varchar(255),
  `phone_number` varchar(255),
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `user_addresses` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `sort_order` int,
  `label` varchar(255),
  `address1` varchar(255),
  `address2` varchar(255),
  `city` varchar(255),
  `region` varchar(255),
  `country` varchar(255),
  `postal_code` varchar(255),
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `short_name` varchar(255),
  `description` varchar(255),
  `vendor` int,
  `price` decimal,
  `sale_price` decimal,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `short_name` varchar(255),
  `description` varchar(255),
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `vendors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `short_name` varchar(255),
  `description` varchar(255),
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `product_categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `category_id` int,
  `category_sort_order` int DEFAULT 100,
  `product_sort_order` int DEFAULT 100,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `carts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `cart_products` (
  `cart_id` int,
  `product_id` int,
  `product_name` varchar(255),
  `product_short_name` varchar(255),
  `product_description` varchar(255),
  `product_vendor` int,
  `product_price` decimal,
  `quantity` decimal,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `orders` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `cart_id` int,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `order_addresses` (
  `order_id` int,
  `address_id` int,
  `label` varchar(255),
  `address1` varchar(255),
  `address2` varchar(255),
  `city` varchar(255),
  `region` varchar(255),
  `country` varchar(255),
  `postal_code` varchar(255),
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `order_products` (
  `order_id` int,
  `product_id` int,
  `product_name` varchar(255),
  `product_short_name` varchar(255),
  `product_description` varchar(255),
  `product_vendor` int,
  `product_price` decimal,
  `quantity` decimal,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `user_addresses` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`vendor`) REFERENCES `vendors` (`id`);

ALTER TABLE `product_categories` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_categories` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `carts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `cart_products` ADD FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`);

ALTER TABLE `cart_products` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `cart_products` ADD FOREIGN KEY (`product_vendor`) REFERENCES `vendors` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `orders` (`user_id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`id`) REFERENCES `order_addresses` (`order_id`);

ALTER TABLE `user_addresses` ADD FOREIGN KEY (`id`) REFERENCES `order_addresses` (`address_id`);

ALTER TABLE `order_products` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_products` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `order_products` ADD FOREIGN KEY (`product_vendor`) REFERENCES `vendors` (`id`);
