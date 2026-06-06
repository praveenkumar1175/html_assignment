-- Day 5 SQL Task

-- Create Orders Table
CREATE TABLE orderss (
    id INT PRIMARY KEY,
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2)
);

-- Insert 5 Orders
INSERT INTO orderss (id, product_name, quantity, price)
VALUES
(1, 'Apple', 5, 150.00),
(2, 'Banana', 2, 80.00),
(3, 'AirPods', 3, 450.00),
(4, 'Laptop', 1, 50000.00),
(5, 'Adapter', 4, 300.00);

-- 1. Count Total Orders
SELECT COUNT(*) AS total_orders
FROM orders;

-- 2. Find SUM of All Order Prices
SELECT SUM(price) AS total_price
FROM orders;

-- 3. Find AVG Order Price
SELECT AVG(price) AS average_price
FROM orders;

-- 4. Group Orders by Product Name and Show Total Sales
SELECT
    product_name,
    SUM(quantity * price) AS total_sales
FROM orders
GROUP BY product_name;

-- 5. Find MAX and MIN Price of Orders
SELECT
    MAX(price) AS highest_price,
    MIN(price) AS lowest_price
FROM orders;

-- 6. Sort Grouped Data by Total Sales Descending
SELECT
    product_name,
    SUM(quantity * price) AS total_sales
FROM orders
GROUP BY product_name
ORDER BY total_sales DESC;