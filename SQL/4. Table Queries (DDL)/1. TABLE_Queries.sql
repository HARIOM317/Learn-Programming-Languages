-- Creating a sample database
CREATE DATABASE school;
USE school;

-- 1. CREATE TABLE - Creates a new table
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(5)
);

SELECT * FROM students;

-- 2. SHOW TABLES - Lists tables inside the database
SHOW TABLES;

-- 3. DESCRIBE TABLE - Shows structure of a table
DESCRIBE students;

-- 4. RENAME TABLE - Changes table name
RENAME TABLE students TO school_students;
SELECT * FROM school_students;
RENAME TABLE school_students TO students;

-- 5. TRUNCATE TABLE - Deletes all rows, but keeps the structure
INSERT INTO students
(id, name, age, grade)
VALUES
(101, "Harsh", 23, 'A'),
(102, "Kapil", 22, 'B'),
(103, "Sourabh", 21, 'A'),
(104, "Anand", 24, 'C');

SELECT * FROM students;

TRUNCATE TABLE students;

-- 6. DROP TABLE - Deletes a table
DROP TABLE students;
