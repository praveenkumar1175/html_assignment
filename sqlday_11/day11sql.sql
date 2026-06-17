

USE database_sql;

------------------------------------------------
-- 1. Employees with salary higher than 
--    their department average
------------------------------------------------

CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    manager_id INT
);

INSERT IGNORE INTO employees VALUES
(1, 'Arun', 'IT', 60000, NULL),
(2, 'Priya', 'HR', 45000, NULL),
(3, 'Rahul', 'IT', 75000, 1),
(4, 'Meena', 'Finance', 50000, NULL),
(5, 'Kiran', 'HR', 55000, 2);

SELECT *
FROM employees e1
WHERE salary >
(
    SELECT AVG(salary)
    FROM employees e2
    WHERE e1.department = e2.department
);


------------------------------------------------
-- 2. Customers who placed more than 2 orders
------------------------------------------------

CREATE TABLE IF NOT EXISTS customers (
    id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);

INSERT IGNORE INTO customers VALUES
(1, 'Ravi'),
(2, 'Anjali'),
(3, 'Suresh');


CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    amount DECIMAL(10,2)
);

INSERT IGNORE INTO orders VALUES
(1, 1, 101, 50000),
(2, 1, 102, 1500),
(3, 1, 103, 800),
(4, 2, 101, 50000),
(5, 3, 104, 1200);


SELECT *
FROM customers
WHERE id IN
(
    SELECT customer_id
    FROM orders
    GROUP BY customer_id
    HAVING COUNT(*) > 2
);


------------------------------------------------
-- 3. Highest-priced product using subquery
------------------------------------------------

CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);

INSERT IGNORE INTO products VALUES
(101, 'Laptop', 50000),
(102, 'Mouse', 500),
(103, 'Keyboard', 1200),
(104, 'Monitor', 15000);


SELECT *
FROM products
WHERE price =
(
    SELECT MAX(price)
    FROM products
);


------------------------------------------------
-- 4. Total order value per customer
------------------------------------------------

SELECT
    customer_name,
    (
        SELECT SUM(amount)
        FROM orders
        WHERE orders.customer_id = customers.id
    ) AS total_order_value
FROM customers;


------------------------------------------------
-- 5. Employees earning more than their manager
------------------------------------------------

SELECT
    e.name AS employee,
    e.salary AS employee_salary,
    m.name AS manager,
    m.salary AS manager_salary
FROM employees e
JOIN employees m
ON e.manager_id = m.id
WHERE e.salary > m.salary;


------------------------------------------------
-- 6. Check if a product exists in orders table
------------------------------------------------

SELECT product_name
FROM products p
WHERE EXISTS
(
    SELECT *
    FROM orders o
    WHERE o.product_id = p.id
);