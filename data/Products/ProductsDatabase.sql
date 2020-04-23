ALTER TABLE `product_categories` DROP FOREIGN KEY IF EXISTS `category_id`;
ALTER TABLE `product_categories` DROP FOREIGN KEY IF EXISTS `product_id`;
ALTER TABLE `products` DROP FOREIGN KEY IF EXISTS `vendor`;

DROP TABLE IF EXISTS `product_categories`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `vendors`;

CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `short_name` varchar(50) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `vendor` int NOT NULL,
  `price` decimal NOT NULL,
  `sale_price` decimal,
  `status` ENUM ('active', 'inactive', 'deleted') NOT NULL DEFAULT 'inactive',
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) UNIQUE KEY NOT NULL,
  `short_name` varchar(50) UNIQUE KEY NOT NULL,
  `description` varchar(2000) NOT NULL,
  `status` ENUM ('active', 'inactive', 'deleted') NOT NULL DEFAULT 'inactive',
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `vendors` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) UNIQUE KEY NOT NULL,
  `short_name` varchar(50) UNIQUE KEY NOT NULL,
  `description` varchar(2000) NOT NULL,
  `status` ENUM ('active', 'inactive', 'deleted') NOT NULL DEFAULT 'inactive',
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `product_categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  `category_sort_order` int NOT NULL DEFAULT 100,
  `product_sort_order` int NOT NULL DEFAULT 100,
  `status` ENUM ('active', 'inactive', 'deleted') NOT NULL DEFAULT 'inactive',
  `updated_at` timestamp,
  `created_at` timestamp
);
ALTER TABLE `products` ADD FOREIGN KEY (`vendor`) REFERENCES `vendors` (`id`);

ALTER TABLE `product_categories` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_categories` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
