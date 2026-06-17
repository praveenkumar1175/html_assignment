-- Select database
drop DATABASE database_sql;

CREATE DATABASE database_sql;
USE database_sql;


-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

-- Insert sample employees
INSERT IGNORE INTO employees VALUES
(1, 'Arun', 'IT', 60000),
(2, 'Priya', 'HR', 45000);

-- 1. Stored Procedure to insert a new employee
DELIMITER $$

CREATE PROCEDURE AddEmployee(
    IN emp_id INT,
    IN emp_name VARCHAR(100),
    IN emp_department VARCHAR(50),
    IN emp_salary DECIMAL(10,2)
)
BEGIN
    INSERT INTO employees
    VALUES(emp_id, emp_name, emp_department, emp_salary);
END $$

DELIMITER ;

-- Call the procedure
CALL AddEmployee(3, 'Rahul', 'Finance', 55000);

-- 2. Stored Procedure to update salary using id
DELIMITER $$

CREATE PROCEDURE UpdateSalary(
    IN emp_id INT,
    IN new_salary DECIMAL(10,2)
)
BEGIN
    UPDATE employees
    SET salary = new_salary
    WHERE id = emp_id;
END $$

DELIMITER ;

-- Call update procedure
CALL UpdateSalary(2, 50000);

-- Create products table for trigger
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY,
    product_name VARCHAR(100),
    stock INT
);

INSERT IGNORE INTO products VALUES
(1, 'Laptop', 10),
(2, 'Mouse', 50);

-- Create orders table for stock update
CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY,
    product_id INT,
    quantity INT
);

-- 3. Trigger to update stock when new order is placed
DELIMITER $$

CREATE TRIGGER update_stock
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE products
    SET stock = stock - NEW.quantity
    WHERE id = NEW.product_id;
END $$

DELIMITER ;

-- Place an order (trigger will run automatically)
INSERT INTO orders VALUES (1, 1, 2);

-- Check updated stock
SELECT * FROM products;

-- Create users table for admin trigger
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY,
    username VARCHAR(100),
    role VARCHAR(20)
);

INSERT IGNORE INTO users VALUES
(1, 'admin1', 'ADMIN'),
(2, 'user1', 'USER');

-- 4. Trigger to prevent deleting the last admin
DELIMITER $$

CREATE TRIGGER prevent_last_admin_delete
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
    IF OLD.role = 'ADMIN' AND 
       (SELECT COUNT(*) FROM users WHERE role = 'ADMIN') = 1 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot delete the last admin user';
    END IF;
END $$

DELIMITER ;

-- Try deleting admin (will show error)
DELETE FROM users WHERE id = 1;

-- 5. Stored Procedure to fetch employees
DELIMITER $$

CREATE PROCEDURE GetEmployees()
BEGIN
    SELECT * FROM employees;
END $$

DELIMITER ;

-- Call the fetch procedure
CALL GetEmployees();

-- 6. Drop procedures and triggers

DROP PROCEDURE IF EXISTS AddEmployee;
DROP PROCEDURE IF EXISTS UpdateSalary;
DROP PROCEDURE IF EXISTS GetEmployees;

DROP TRIGGER IF EXISTS update_stock;
DROP TRIGGER IF EXISTS prevent_last_admin_delete;