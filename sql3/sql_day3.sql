-- 1. Create table products
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

-- 2. Add a new column stock
ALTER TABLE products
ADD stock INT;

-- 3. Rename column price to unit_price
ALTER TABLE products
RENAME COLUMN price TO unit_price;

-- 4. Insert 5 products
INSERT INTO products (id, name, unit_price, stock)
VALUES
(1, 'Laptop', 50000.00, 10),
(2, 'Mouse', 500.00, 50),
(3, 'Keyboard', 1200.00, 30),
(4, 'Monitor', 15000.00, 15),
(5, 'Printer', 8000.00, 8);

-- 5. Update the stock of one product
UPDATE products
SET stock = 20
WHERE id = 4;

-- 6. Delete one product
DELETE FROM products
WHERE id = 5;

-- View the final table
SELECT * FROM products;