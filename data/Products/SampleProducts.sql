LOAD DATA LOCAL INFILE '/Users/alexlindsay/Documents/Programming/SearchProject/search-project/data/Products/vendors.csv' REPLACE INTO TABLE `vendors` CHARACTER SET UTF8 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\r' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE '/Users/alexlindsay/Documents/Programming/SearchProject/search-project/data/Products/products.csv' REPLACE INTO TABLE `products` CHARACTER SET UTF8 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\r' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE '/Users/alexlindsay/Documents/Programming/SearchProject/search-project/data/Products/categories.csv' REPLACE INTO TABLE `categories` CHARACTER SET UTF8 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\r' IGNORE 1 LINES;
LOAD DATA LOCAL INFILE '/Users/alexlindsay/Documents/Programming/SearchProject/search-project/data/Products/product_categories.csv' REPLACE INTO TABLE `product_categories` CHARACTER SET UTF8 FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\r' IGNORE 1 LINES;
