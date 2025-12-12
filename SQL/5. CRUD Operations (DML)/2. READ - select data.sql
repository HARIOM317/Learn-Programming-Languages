-- Fetch All Columns
SELECT * FROM students;

-- Fetch Specific Columns
SELECT name, city FROM students;

-- Using WHERE Clause (filter rows)
SELECT * FROM students
WHERE city = 'Mumbai';

SELECT * FROM students
WHERE age > 21;

SELECT * FROM students
WHERE name LIKE 'A%';