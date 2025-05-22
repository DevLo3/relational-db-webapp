/*
****

Citations:
    
Leveraged starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

****
*/

// ########################################
// ########## SETUP

// Express
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = 37138;

// Database
const db = require('./database/db-connector');

// Handlebars
const { engine } = require('express-handlebars'); // Import express-handlebars engine
app.engine('.hbs', engine({ extname: '.hbs' })); // Create instance of handlebars
app.set('view engine', '.hbs'); // Use handlebars engine for *.hbs files.

// ########################################
// ########## ROUTE HANDLERS

// READ ROUTES
app.get('/', async function (req, res) {
    try {
        res.render('home'); // Render the home.hbs file
    } catch (error) {
        console.error('Error rendering page:', error);
        // Send a generic error message to the browser
        res.status(500).send('An error occurred while rendering the page.');
    }
});

app.get('/cust-orders', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we use two JOIN clauses to display the names of the Customers and Products
        const query1 = `
            SELECT Cust_Prod_Orders.cust_prod_order_id AS OrderNo, Customers.company_name AS Company, \ 
                Products.name AS Product, Cust_Prod_Orders.price AS Price, Cust_Prod_Orders.quantity AS QTY, \ 
                Cust_Prod_Orders.needs_delivery AS Delivery, Cust_Prod_Orders.recurring AS Recurring \
            FROM Cust_Prod_Orders 
            LEFT JOIN Customers 
                ON Cust_Prod_Orders.customer_id = Customers.customer_id
            LEFT JOIN Products 
                ON Cust_Prod_Orders.product_id = Products.product_id;`;

        // query2 is used to populate Customers dropdown values
        const query2 = 'SELECT * FROM Customers;';

        // query3 is used to populate Products dropdown values
        const query3 = 'SELECT * FROM Products;';
        
        const [cust_orders] = await db.query(query1);
        const [customers] = await db.query(query2);
        const [products] = await db.query(query3);

        // Render the cust-orders.hbs file, and also send the renderer
        //  an object that contains our Cust_Prod_Orders, Customers, and Products information
        res.render('cust-orders', { 
            cust_orders: cust_orders, 
            customers: customers, 
            products: products 
        });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

app.get('/products', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we use a JOIN clause to display the names of Suppliers
        const query1 = `
            SELECT Products.product_id AS ProductID, Products.name AS Name, Products.description AS Description, \
                Products.is_organic AS Organic, Suppliers.ranch AS Supplier
            FROM Products
            LEFT JOIN Suppliers 
                ON Products.supplier_id = Suppliers.supplier_id;`;

        const [products] = await db.query(query1);

        // Render the products.hbs file, and also send the renderer
        //  an object that contains our Products information
        res.render('products', { 
            products: products 
        });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

app.get('/suppliers', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we are selecting from the Suppliers table
        const query1 = `
            SELECT Suppliers.supplier_id AS SupplierID, Suppliers.ranch AS Name, Suppliers.country AS Country, Suppliers.rep_name AS Representative, Suppliers.rep_email AS Email, Suppliers.rep_phone AS Phone
            FROM Suppliers;`;

        const [suppliers] = await db.query(query1);

        // Render the suppliers.hbs file, and also send the renderer
        //  an object that contains our Suppliers information
        res.render('suppliers', { 
            suppliers: suppliers 
        });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

app.get('/customers', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we use a JOIN clause to display the names of Loyalty Tiers
        const query1 = `
            SELECT Customers.customer_id AS CustomerID, Customers.company_name AS Name, Customers.address AS Address, Customers.is_local AS Local, Customers.buyer_name AS Buyer, Customers.buyer_email AS Email, Customers.buyer_phone AS Phone, Loyalty_Tiers.tier_name AS Tier
            FROM Customers
            LEFT JOIN Loyalty_Tiers
                ON Customers.loyalty_tier_id = Loyalty_Tiers.loyalty_tier_id;`;

        const [customers] = await db.query(query1);

        // Render the customers.hbs file, and also send the renderer
        //  an object that contains our Customers information
        res.render('customers', { 
            customers: customers 
        });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

app.get('/purch-orders', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we use a JOIN clause to display the names of Suppliers
        const query1 = `
            SELECT Purchase_Orders.purchase_order_id AS PurchaseOrderNo, Suppliers.ranch AS Supplier, Purchase_Orders.order_date AS Date, Purchase_Orders.total AS Total 
            FROM Purchase_Orders
            LEFT JOIN Suppliers
                ON Purchase_Orders.supplier_id = Suppliers.supplier_id;`;

        const [purch_orders] = await db.query(query1);

        // Render the purch-orders.hbs file, and also send the renderer
        //  an object that contains our Purchase_Orders information
        res.render('purch-orders', { 
            purch_orders: purch_orders 
        });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

app.get('/loyalty-tiers', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we are selecting from the Loyalty_Tiers table
        const query1 = `
            SELECT Loyalty_Tiers.loyalty_tier_id AS TierID, Loyalty_Tiers.tier_name AS Tier, Loyalty_Tiers.min_spend AS MinSpend, Loyalty_Tiers.discount AS Discount 
            FROM Loyalty_Tiers;`;

        const [loyalty_tiers] = await db.query(query1);

        // Render the loyalty-tiers.hbs file, and also send the renderer
        //  an object that contains our Loyalty_Tiers information
        res.render('loyalty-tiers', { 
            loyalty_tiers: loyalty_tiers 
        });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

app.get('/prod-purchases', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we use a JOIN clause to display Products
        const query1 = `
            SELECT Product_Purchases.prod_purchase_id AS PurchaseID, Products.name AS Product, Product_Purchases.purchase_order_id AS PurchaseOrder, Product_Purchases.cost AS Cost, Product_Purchases.quantity AS QTY 
            FROM Product_Purchases
            LEFT JOIN Products
                ON Product_Purchases.product_id = Products.product_id;`;

        const [prod_purchases] = await db.query(query1);

        // Render the prod-purchases.hbs file, and also send the renderer
        //  an object that contains our Product_Purchases information
        res.render('prod-purchases', { 
            prod_purchases: prod_purchases 
        });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

// CREATE ROUTES
app.post('/cust-orders/create', async function (req, res) {
    try {
        // Parse frontend form information
        let data = req.body;

        // Create and execute our queries
        // Using parameterized queries (Prevents SQL injection attacks)
        const query1 = `CALL sp_CreateCustOrder(?, ?, ?, ?, ?, ?, @new_id);`;

        // Store ID of last inserted row
        const [[[rows]]] = await db.query(query1, [
            data.create_order_cust,
            data.create_order_prod,
            data.create_order_price,
            data.create_order_qty,
            data.create_order_deliv,
            data.create_order_recur,
        ]);

        console.log(`CREATE cust-orders. ID: ${rows.new_id} ` +
            `Company: ${data.create_order_cust} Product: ${data.create_order_prod}`
        );

        // Redirect the user to the updated webpage
        res.redirect('/cust-orders');
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

// ########################################
// ########## LISTENER

app.listen(PORT, '0.0.0.0', function () {
    console.log(
        'Express started on http://localhost:' +
            PORT +
            '; press Ctrl-C to terminate.'
    );
});