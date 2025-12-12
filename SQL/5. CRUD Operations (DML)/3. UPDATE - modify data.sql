-- Update single column
UPDATE students
SET city = 'Jaipur'
WHERE name = 'Amit';

-- Update multiple columns
UPDATE students
SET age = 24, city = 'Hyderabad'
WHERE id = 3;

-- Update based on condition
UPDATE students
SET age = age + 1
WHERE city = 'Mumbai';

-- Show Table
SELECT * FROM students;