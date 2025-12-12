CREATE DATABASE company;
USE company;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    age INT
);

-- Insert sample data
INSERT INTO employees (name, department, salary, age) VALUES
('Amit', 'HR', 45000, 28),
('Rohan', 'Engineering', 70000, 26),
('Neha', 'Marketing', 52000, 30),
('Sara', 'Engineering', 90000, 32),
('Kunal', 'HR', 48000, 25),
('Priya', 'Marketing', 61000, 29);
