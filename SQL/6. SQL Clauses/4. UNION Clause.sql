CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    department VARCHAR(50),
    location VARCHAR(50)
);

INSERT INTO departments (department, location) VALUES
('HR', 'Delhi'),
('Engineering', 'Bangalore'),
('Marketing', 'Mumbai');

-- UNION CLAUSE - Combines results of two queries.

-- 1. UNION - Removes duplicates
SELECT name FROM employees
UNION
SELECT department FROM departments;

-- 2. UNION ALL - Keeps duplicates
SELECT name FROM employees
UNION
SELECT department FROM departments;