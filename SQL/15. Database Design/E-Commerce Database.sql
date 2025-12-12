-- Create Database
DROP DATABASE IF EXISTS e_commerce;
CREATE DATABASE e_commerce;
USE e_commerce;

-- Customer Schema
CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15) UNIQUE
);

-- Address Schema
CREATE TABLE addresses (
    id INT KEY AUTO_INCREMENT,
    customer_id INT,
    address_line VARCHAR(255),
    city VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
-- Start address id by 101
ALTER TABLE addresses AUTO_INCREMENT = 101;

-- Product Schema
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Start product id by 1001
ALTER TABLE products AUTO_INCREMENT = 1001;

-- Category Schema
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100)
);
-- Start category id by 201
ALTER TABLE categories AUTO_INCREMENT = 201;

-- Product Category Schema
CREATE TABLE product_category (
    product_id INT,
    category_id INT,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Order Schema
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    total_amount DECIMAL(10, 2),
    status ENUM('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
-- Start order id by 10001
ALTER TABLE orders AUTO_INCREMENT = 10001;

-- Order Item Schema
CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- Start order item id by 20001
ALTER TABLE order_items AUTO_INCREMENT = 20001;

-- Payment Schema
CREATE TABLE payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT UNIQUE,
    payment_method ENUM('CARD', 'UPI', 'COD'),
    status ENUM('PENDING', 'SUCCESS', 'FAILED'),
    amount DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- =======================================================
-- ---------- OPERATIONS ----------
-- 1. Get customer order history
SELECT o.id, o.total_amount, o.status, o.created_at
FROM orders o
WHERE o.customer_id = 1;

-- 2. Get best-selling products
SELECT p.name, SUM(oi.quantity) AS total_sold
FROM order_items oi
JOIN products p ON p.id = oi.product_id
GROUP BY p.id
ORDER BY total_sold DESC;

-- 3. Get orders with payment status
SELECT o.id, o.status, p.status AS payment_status
FROM orders o
JOIN payments p ON p.order_id = o.id;