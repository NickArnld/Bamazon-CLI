DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(30) AUTO_INCREMENT PRIMARY KEY,
  
    product_name VARCHAR(255) NOT NULL;

    department_name VARCHAR(255);

    price FLOAT NOT NULL;

    stock_quantity INTEGER(30);

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Desk Fan", "Home and Office", 21.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stapler", "Home and Office", 12.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Staples", "Home and Office", 4.99, 40000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 299.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("60 inch TV", "Electronics", 500.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Phone Charging Cable", "Electronics", 9.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Universal Remote", "Electronics", 89.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keurig", "Kitchen Appliances", 79.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Kitchen Appliances", 51.00, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smart Frying Pan", "Kitchen Appliances", 99.00, 60);

