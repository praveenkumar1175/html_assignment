CREATE DATABASE database_sql;
USE database_sql;

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Insert employees data
INSERT INTO employees VALUES
(1, 'Arun', 'IT', 60000),
(2, 'Priya', 'HR', 45000),
(3, 'Rahul', 'IT', 75000),
(4, 'Meena', 'Finance', 50000),
(5, 'Kiran', 'HR', 55000);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);

-- Insert products data
INSERT INTO products VALUES
(1, 'Laptop', 50000),
(2, 'Mouse', 500),
(3, 'Keyboard', 1200),
(4, 'Monitor', 15000);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
    id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);

-- Insert customers data
INSERT INTO customers VALUES
(1, 'Ravi'),
(2, 'Anjali'),
(3, 'Suresh');

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY,
    customer_id INT,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);

-- Insert orders data
INSERT INTO orders VALUES
(1, 1, 'Laptop', 50000),
(2, 2, 'Mouse', 500),
(3, 1, 'Keyboard', 1200);

-- 1. Employees with salary greater than average salary
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

-- 2. Products with price higher than the cheapest order
SELECT *
FROM products
WHERE price > (
    SELECT MIN(price)
    FROM orders
);

-- 3. Customers who have placed orders
SELECT *
FROM customers
WHERE id IN (
    SELECT customer_id
    FROM orders
);

-- 4. Show each customer with their order count
SELECT
    customer_name,
    (
        SELECT COUNT(*)
        FROM orders
        WHERE customers.id = orders.customer_id
    ) AS total_orders
FROM customers;

-- 5. Highest salary in each department (correlated subquery)
SELECT *
FROM employees e1
WHERE salary = (
    SELECT MAX(salary)
    FROM employees e2
    WHERE e1.department = e2.department
);

-- 6. Check if product 'Laptop' exists
SELECT product_name
FROM products
WHERE EXISTS (
    SELECT *
    FROM products
    WHERE product_name = 'Laptop'
);