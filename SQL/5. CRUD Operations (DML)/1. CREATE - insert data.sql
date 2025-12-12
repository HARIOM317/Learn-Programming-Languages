CREATE DATABASE college;
USE college;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50)
);

-- Start students id by 101
ALTER TABLE students AUTO_INCREMENT = 101;

-- Single Row Insert
INSERT INTO students (name, age, city)
VALUES ('Amit', 21, 'Delhi');

-- Multiple Row Insert
INSERT INTO students
(name, age, city)
VALUES 
('Riya', 22, 'Mumbai'),
('Vikas', 23, 'Pune'),
('Neha', 21, 'Kolkata');

-- Insert Without Column Names - Not recommended but possible if values follow correct order
INSERT INTO students
VALUES (NULL, 'Rahul', 20, 'Indore');

-- Show Table
SELECT * FROM students;