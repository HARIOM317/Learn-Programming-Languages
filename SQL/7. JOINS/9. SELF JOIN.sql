CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50),
    parent_id INT -- references category_id of the parent
);

INSERT INTO categories (category_id, category_name, parent_id) VALUES
(1, 'Electronics', NULL),          -- top-level
(2, 'Mobiles', 1),                 -- child of Electronics
(3, 'Laptops', 1),                 -- child of Electronics
(4, 'Smartphones', 2),             -- child of Mobiles
(5, 'Feature Phones', 2),          -- child of Mobiles
(6, 'Gaming Laptops', 3);          -- child of Laptops

SELECT * FROM categories;

-- SELF JOIN
SELECT
    c.category_id AS CategoryID,
    c.category_name AS Category,
    p.category_name AS ParentCategory
FROM categories c
LEFT JOIN categories p
ON c.parent_id = p.category_id;