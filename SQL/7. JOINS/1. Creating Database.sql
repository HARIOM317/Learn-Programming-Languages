-- Create Database
DROP DATABASE IF EXISTS shopdb;
CREATE DATABASE shopdb;
USE shopdb;

-- ----- Defining Schema -----

-- Customers
CREATE TABLE customers (
	id INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50)
);

-- Orders
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  product VARCHAR(50),
  amount INT DEFAULT 0
);

-- ----- Inserting data -----
INSERT INTO customers 
(id, name, city) VALUES
(1, 'Amit', 'Delhi'),
(2, 'Riya', 'Mumbai'),
(3, 'Kabir', 'Pune');

INSERT INTO orders 
(id, customer_id, product, amount) VALUES
(101, 1, 'Laptop', 55000),
(102, 1, 'Mouse', 800),
(103, 2, 'Keyboard', 1500),
(104, 4, 'Headphones', 2000);

SELECT * FROM customers;
SELECT * FROM orders;