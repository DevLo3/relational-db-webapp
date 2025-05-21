-- #############################
-- CREATE cust_orders
-- #############################
DROP PROCEDURE IF EXISTS sp_CreateCustOrder;

DELIMITER //
CREATE PROCEDURE sp_CreateCustOrder(
    IN p_customer VARCHAR(50), 
    IN p_product VARCHAR(50), 
    IN p_price DECIMAL(10,2), 
    IN p_quantity INT,
    IN p_delivery TINYINT(1),
    IN p_recurring TINYINT(1),
    OUT p_id INT)
BEGIN
    INSERT INTO Cust_Prod_Orders (
    customer_id, 
    product_id, 
    price, 
    quantity, 
    needs_delivery, 
    recurring
    ) 
    VALUES (
    p_customer,
    p_product,
    p_price, 
    p_quantity, 
    p_delivery, 
    p_recurring
    );

    -- Store the ID of the last inserted row
    SELECT LAST_INSERT_ID() into p_id;
    -- Display the ID of the last inserted customer order.
    SELECT LAST_INSERT_ID() AS 'new_id';

END //
DELIMITER ;