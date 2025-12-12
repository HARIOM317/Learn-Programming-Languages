-- CREATE TABLE LIKE - Creates a new table with same structure
CREATE TABLE students_backup LIKE students;
SELECT * FROM students_backup;

-- COPY TABLE DATA
INSERT INTO students_backup
SELECT * FROM students;

-- CREATE TABLE AS SELECT (CTAS) - Copies structure + data at same time
CREATE TABLE top_students AS SELECT * FROM students
WHERE grade = 'A';

SELECT * FROM top_students;

-- TEMPORARY TABLE
CREATE TEMPORARY TABLE temp_ids (
    student_id INT
);

-- INDEX Creation - Used for performance
CREATE INDEX idx_name ON students(name);
SELECT * FROM students;
