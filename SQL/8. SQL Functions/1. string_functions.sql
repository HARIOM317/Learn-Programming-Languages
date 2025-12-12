SET @name = '    Hariom Singh Rajput      ';

-- ---------- SQL String Functions ----------

-- UPPER()
SELECT UPPER('hello');

-- LOWER()
SELECT LOWER('HELLO');

-- LENGTH()
SELECT LENGTH('Hello World!');

-- TRIM()
SELECT TRIM(@name);

-- LTRIM()
SELECT LTRIM(@name);

-- RTRIM()
SELECT RTRIM(@name);

-- SUBSTRING()
SELECT SUBSTRING('Hariom Singh Rajput', 1, 9);

-- CONCAT()
SELECT CONCAT('Hariom', ' ', 'Rajput');

-- REPLACE()
SELECT REPLACE("Hello World", "World", "SQL");

-- LOCATE()
SELECT LOCATE('om', 'Hariom');

-- REVERSE()
SELECT REVERSE('MySQL');
