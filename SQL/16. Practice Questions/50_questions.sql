-- Q-1. Write an SQL query to fetch “FIRST_NAME” from Worker table using the alias name as <WORKER_NAME>.
SELECT first_name AS worker_name from workers;

-- Q-2. Write an SQL query to fetch “FIRST_NAME” from Worker table in upper case.
SELECT UPPER(first_name) FROM workers;

-- Q-3. Write an SQL query to fetch unique values of DEPARTMENT from Worker table.
SELECT DISTINCT department FROM workers;

-- Q-4. Write an SQL query to print the first three characters of  FIRST_NAME from Worker table.
SELECT substring(first_name, 1, 3) FROM workers;

-- Q-5. Write an SQL query to find the position of the alphabet (‘b’) in the first name column ‘Amitabh’ from Worker table.
SELECT LOCATE('b', first_name) FROM workers WHERE first_name = 'Amitabh';

-- Q-6. Write an SQL query to print the FIRST_NAME from Worker table after removing white spaces from the right side.
SELECT RTRIM(first_name) FROM workers;

-- Q-7. Write an SQL query to print the DEPARTMENT from Worker table after removing white spaces from the left side.
SELECT LTRIM(first_name) FROM workers;

-- Q-8. Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and prints its length.
SELECT DISTINCT department, LENGTH(department) FROM workers;

-- Q-9. Write an SQL query to print the FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.
SELECT REPLACE(first_name, 'a', 'A')  FROM workers;

-- Q-10. Write an SQL query to print the FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME.
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM workers;

-- Q-11. Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending.
SELECT * FROM workers ORDER BY first_name;

-- Q-12. Write an SQL query to print all Worker details from the Worker table order by 
-- FIRST_NAME Ascending and DEPARTMENT Descending.
SELECT * FROM workers ORDER BY first_name, department DESC;

-- Q-13. Write an SQL query to print details for Workers with the first name as “Vipul” and “Satish” from Worker table.
SELECT * FROM workers WHERE first_name IN ('Vipul', 'Satish');

-- Q-14. Write an SQL query to print details of workers excluding first names, “Vipul” and “Satish” from Worker table.
SELECT * FROM workers WHERE first_name NOT IN ('Vipul', 'Satish');

-- Q-15. Write an SQL query to print details of Workers with DEPARTMENT name as “Admin*”.
SELECT * FROM workers WHERE department LIKE 'Admin%';

-- Q-16. Write an SQL query to print details of the Workers whose FIRST_NAME contains ‘a’.
SELECT * FROM workers WHERE first_name LIKE '%a%';

-- Q-17. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘a’.
SELECT * FROM workers WHERE first_name LIKE '%a';

-- Q-18. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘h’ and contains six alphabets.
SELECT * FROM workers WHERE first_name LIKE '_____h';

-- Q-19. Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000.
SELECT * FROM workers WHERE salary BETWEEN 100000 AND 500000;

-- Q-20. Write an SQL query to print details of the Workers who have joined in Feb’2014.
SELECT * FROM workers WHERE YEAR(joining_date) = 2014 AND MONTH(joining_date) = 02;

-- Q-21. Write an SQL query to fetch the count of employees working in the department ‘Admin’.
SELECT department, COUNT(*) FROM workers WHERE department = 'Admin';

-- Q-22. Write an SQL query to fetch worker full names with salaries >= 50000 and <= 100000.
SELECT CONCAT(first_name, ' ', last_name) FROM workers
WHERE salary BETWEEN 50000 AND 100000;

-- Q-23. Write an SQL query to fetch the no. of workers for each department in the descending order.
SELECT department, COUNT(worker_id) AS no_of_worker FROM workers
GROUP BY department ORDER BY no_of_worker DESC;

-- Q-24. Write an SQL query to print details of the Workers who are also Managers.
SELECT w.* FROM workers AS w 
INNER JOIN titleS AS t ON w.worker_id = t.worker_ref_id 
WHERE t.worker_title = 'Manager';

-- Q-25. Write an SQL query to fetch number (more than 1) of same titles in the ORG of different types.
SELECT worker_title, COUNT(*) AS count FROM titles 
GROUP BY worker_title HAVING count > 1;

-- Q-26. Write an SQL query to show only odd rows from a table.
SELECT * FROM workers WHERE MOD (worker_id, 2) != 0;
SELECT * FROM workers WHERE MOD (worker_id, 2) <> 0;
SELECT * FROM workers WHERE worker_id % 2 = 1;

-- Q-27. Write an SQL query to show only even rows from a table. 
SELECT * FROM workers WHERE MOD (worker_id, 2) = 0;

-- Q-28. Write an SQL query to clone a new table from another table.
CREATE TABLE worker_clone LIKE workers;
INSERT INTO worker_clone SELECT * FROM workers;
SELECT * FROM worker_clone;

-- Q-29. Write an SQL query to fetch intersecting records of two tables.
SELECT workers.* FROM workers INNER JOIN worker_clone USING(worker_id);

-- Q-30. Write an SQL query to show records from one table that another table does not have.
-- MINUS
SELECT workers.* FROM workers 
LEFT JOIN worker_clone USING (worker_id) 
WHERE worker_clone.worker_id IS NULL;

-- Q-31. Write an SQL query to show the current date and time.
-- DUAL
SELECT CURDATE();
SELECT NOW();

-- Q-32. Write an SQL query to show the top n (say 5) records of a table order by descending salary.
SELECT * FROM workers ORDER BY salary DESC LIMIT 5;

-- Q-34. Write an SQL query to determine the 5th highest salary without using LIMIT keyword.
SELECT salary FROM workers w1
WHERE 4 = (
	SELECT COUNT(DISTINCT (w2.salary))
	FROM workers w2
	WHERE w2.salary >= w1.salary
);
 
-- Q-35. Write an SQL query to fetch the list of employees with the same salary.
SELECT w1.* FROM workers w1, workers w2 
WHERE w1.salary = w2.salary AND w1.worker_id != w2.worker_id;

-- Q-36. Write an SQL query to show the second highest salary from a table using sub-query.
SELECT MAX(salary) FROM workers
WHERE salary NOT IN (SELECT MAX(salary) FROM workers);

-- Q-37. Write an SQL query to show one row twice in results from a table.
SELECT * FROM workers
UNION ALL
SELECT * FROM workers ORDER BY worker_id;

-- Q-38. Write an SQL query to list worker_id who does not get bonus.
SELECT worker_id FROM workers WHERE worker_id NOT IN (SELECT worker_ref_id FROM bonus);

-- Q-39. Write an SQL query to fetch the first 50% records from a table.
SELECT * FROM workers WHERE worker_id <= ( SELECT COUNT(worker_id)/2 FROM workers);

-- Q-40. Write an SQL query to fetch the departments that have less than 4 people in it.
SELECT department, COUNT(department) AS depCount FROM workers
GROUP BY department HAVING depCount < 4;

-- Q-41. Write an SQL query to show all departments along with the number of people in there.
SELECT department, COUNT(department) AS depCount FROM workers GROUP BY department;

-- Q-42. Write an SQL query to show the last record from a table.
SELECT * FROM workers WHERE worker_id = (SELECT max(worker_id) FROM workers);
SELECT * FROM workers ORDER BY worker_id DESC LIMIT 1;

-- Q-43. Write an SQL query to fetch the first row of a table.
SELECT * FROM workers WHERE worker_id = (SELECT min(worker_id) FROM workers);

-- Q-44. Write an SQL query to fetch the last five records from a table.
(SELECT * FROM workers ORDER BY worker_id DESC LIMIT 5) ORDER BY worker_id;

-- Q-45. Write an SQL query to print the name of employees having the highest salary in each department.
SELECT w.department, w.first_name, w.salary FROM (
	SELECT MAX(salary) AS maxsal, department FROM workers
	GROUP BY department
) temp
INNER JOIN workers w ON temp.department = w.department AND temp.maxsal = w.salary;

-- Q-46. Write an SQL query to fetch three max salaries from a table using co-related subquery
SELECT DISTINCT salary FROM workers w1 WHERE 3 >= (
	SELECT COUNT(DISTINCT salary) FROM workers w2 WHERE w1.salary <= w2.salary
) ORDER BY w1.salary DESC;

SELECT DISTINCT salary FROM workers ORDER BY salary DESC LIMIT 3;

-- Q-47. Write an SQL query to fetch three min salaries from a table using co-related subquery
SELECT DISTINCT salary FROM workers w1
WHERE 3 >= (
	SELECT COUNT(DISTINCT salary) FROM workerS w2 
	WHERE w1.salary >= w2.salary
) 
ORDER BY w1.salary DESC;

-- Q-48. Write an SQL query to fetch n max salaries from a table.
SELECT DISTINCT salary FROM workers w1
WHERE 2 >= ( -- n = 2
	SELECT COUNT(DISTINCT salary) FROM workers w2 
	WHERE w1.salary <= w2.salary
) ORDER BY w1.salary DESC;

-- Q-49. Write an SQL query to fetch departments along with the total salaries paid for each of them.
SELECT department , SUM(salary) AS depSal FROM workers
GROUP BY department ORDER BY depSal DESC;

-- Q-50. Write an SQL query to fetch the names of workers who earn the highest salary.
SELECT first_name, salary FROM workers WHERE salary = (SELECT MAX(salary) FROM workers);
