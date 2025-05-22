/*
****

Citations:
    
Leveraged starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

****
*/

-- #############################
-- CREATE cust_orders
-- #############################
DROP PROCEDURE IF EXISTS sp_CreateCustOrder;

DELIMITER //
CREATE PROCEDURE sp_CreateCustOrder(
    IN p_customer INT, 
    IN p_product INT, 
    IN p_price DECIMAL(10,2), 
    IN p_quantity INT,
    IN p_delivery TINYINT(1),
    IN p_recurring TINYINT(1),
    OUT p_id INT
    )
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

-- #############################
-- UPDATE cust_orders
-- #############################
DROP PROCEDURE IF EXISTS sp_UpdateCustOrder;

DELIMITER //
CREATE PROCEDURE sp_UpdateCustOrder(
    IN p_id INT, 
    IN p_customer INT, 
    IN p_product INT, 
    IN p_price DECIMAL(10,2), 
    IN p_quantity INT,
    IN p_delivery TINYINT(1),
    IN p_recurring TINYINT(1)
    )

BEGIN
    UPDATE Cust_Prod_Orders
    SET
        customer_id = p_customer,
        product_id = p_product,
        price = p_price, 
        quantity = p_quantity, 
        needs_delivery = p_delivery, 
        recurring = p_recurring
    WHERE cust_prod_order_id = p_id;
END //
DELIMITER ;
