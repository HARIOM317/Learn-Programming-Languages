USE shopdb;

CREATE TABLE sales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    emp VARCHAR(35) NOT NULL,
    amount INT DEFAULT 0,
    month VARCHAR(3)
);

INSERT INTO sales
(emp, amount, month)
VALUES
("Amit", 2000, 'Jan'),
("Amit", 3000, 'Feb'),
("Amit", 2500, 'Mar'),
("Riya", 4000, 'Jan'),
("Riya", 3500, 'Feb'),
("Kabir", 4000, 'Jan'),
("Kabir", 3000, 'Feb'),
("Kabir", 5000, 'Mar');

SELECT * FROM sales;