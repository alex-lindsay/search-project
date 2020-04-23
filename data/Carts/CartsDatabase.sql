ALTER TABLE `cart_products` DROP FOREIGN KEY IF EXISTS `cart_id`;

DROP TABLE IF EXISTS `cart_products`;
DROP TABLE IF EXISTS `carts`;

CREATE TABLE `carts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `status` ENUM ('active', 'inactive', 'deleted'),
  `updated_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `cart_products` (
  `cart_id` int,
  `product_id` int,
  `product_name` varchar(255),
  `product_short_name` varchar(255),
  `product_description` varchar(2000),
  `product_vendor` int,
  `product_price` decimal,
  `quantity` decimal,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `updated_at` timestamp,
  `created_at` timestamp
);
