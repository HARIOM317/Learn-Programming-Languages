-- Add a Column
ALTER TABLE students
ADD COLUMN email VARCHAR(50);

-- Add Multiple Columns
ALTER TABLE students
ADD COLUMN phone VARCHAR(20),
ADD COLUMN city VARCHAR(50);

SELECT * FROM students;

-- Modify Column Data Type
ALTER TABLE students
MODIFY COLUMN age SMALLINT;

-- Change Column Name
ALTER TABLE students
CHANGE COLUMN grade class_section VARCHAR(10);

ALTER TABLE students
CHANGE COLUMN class_section grade VARCHAR(10);

-- Drop a Column
ALTER TABLE students
DROP COLUMN city;

-- Add Primary Key
ALTER TABLE students
ADD PRIMARY KEY (id);

-- Add Foreign Key
CREATE TABLE classes (
    class_id INT PRIMARY KEY,
    class_name VARCHAR(20)
);

ALTER TABLE students
ADD COLUMN class_id INT,
ADD CONSTRAINT fk_class
FOREIGN KEY (class_id) REFERENCES classes(class_id);

SELECT * FROM students;

-- Drop Primary/Foreign Keys
ALTER TABLE students DROP PRIMARY KEY;
ALTER TABLE students DROP FOREIGN KEY fk_class;