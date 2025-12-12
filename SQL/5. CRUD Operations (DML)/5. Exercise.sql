-- Q1) Insert 3 new students: Ankit(24, Surat), Meena(22, Jaipur), Kabir(23, Bhopal)
INSERT INTO students
(name, age, city)
VALUES
('Ankit', 24, 'Surat'),
('Meena', 22, 'Jaipur'),
('Kabir', 23, 'Bhopal');

-- Q2) Fetch all students from Jaipur
SELECT * FROM students
WHERE city = 'Jaipur';

-- Q3) Update Kabir’s city to Indore
UPDATE students
SET city = 'Indore'
WHERE name = 'Kabir';

-- Q4) Delete all students whose age < 22
DELETE FROM students
WHERE age < 22;

-- Q5) Get students whose name starts with 'A'
SELECT * FROM students
WHERE name LIKE "A%";

-- Q6) Get all unique ages
SELECT DISTINCT age FROM students;

-- Q7) Fetch top 2 oldest students
SELECT * FROM students
ORDER BY age DESC
LIMIT 2;

-- Show Table
SELECT * FROM students;