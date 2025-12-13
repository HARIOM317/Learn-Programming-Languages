CREATE DATABASE ORG;
SHOW DATABASES;
USE ORG;

CREATE TABLE workers (
	worker_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	salary INT,
	joining_date DATETIME,
	department VARCHAR(50)
);

INSERT INTO workers
(worker_id, first_name, last_name, salary, joining_date, department) VALUES
(001, 'Monika', 'Arora', 100000, '14-02-20 09:00:00', 'HR'),
(002, 'Niharika', 'Verma', 80000, '14-06-11 09:00:00', 'Admin'),
(003, 'Vishal', 'Singhal', 300000, '14-02-20 09:00:00', 'HR'),
(004, 'Amitabh', 'Singh', 500000, '14-02-20 09:00:00', 'Admin'),
(005, 'Vivek', 'Bhati', 500000, '14-06-11 09:00:00', 'Admin'),
(006, 'Vipul', 'Diwan', 200000, '14-06-11 09:00:00', 'Account'),
(007, 'Satish', 'Kumar', 75000, '14-01-20 09:00:00', 'Account'),
(008, 'Geetika', 'Chauhan', 90000, '14-04-11 09:00:00', 'Admin');
        
SELECT * FROM workers;

-- ------------------------------------------------------------------

CREATE TABLE bonus (
	worker_ref_id INT,
	bonus_amount INT,
	bonus_date DATETIME,
	FOREIGN KEY (worker_ref_id) REFERENCES workers(worker_id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT INTO bonus 
(worker_ref_id, bonus_amount, bonus_date) VALUES
(001, 5000, '16-02-20'),
(002, 3000, '16-06-11'),
(003, 4000, '16-02-20'),
(001, 4500, '16-02-20'),
(002, 3500, '16-06-11');

SELECT * FROM bonus;
-- ------------------------------------------------------------------
        
CREATE TABLE titles (
	worker_ref_id INT,
	worker_title VARCHAR(25),
	affected_from DATETIME,
	FOREIGN KEY (worker_ref_id) REFERENCES workers(worker_id)
	ON DELETE CASCADE
    ON UPDATE CASCADE
);

INSERT INTO titles 
(worker_ref_id, worker_title, affected_from) VALUES
(001, 'Manager', '2016-02-20 00:00:00'),
(002, 'Executive', '2016-06-11 00:00:00'),
(008, 'Executive', '2016-06-11 00:00:00'),
(005, 'Manager', '2016-06-11 00:00:00'),
(004, 'Asst. Manager', '2016-06-11 00:00:00'),
(007, 'Executive', '2016-06-11 00:00:00'),
(006, 'Lead', '2016-06-11 00:00:00'),
(003, 'Lead', '2016-06-11 00:00:00');
 
SELECT * FROM titles;