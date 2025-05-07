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

app.get('/bsg-people', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we use a JOIN clause to display the names of the homeworlds
        const query1 = `SELECT bsg_people.id, bsg_people.fname, bsg_people.lname, \
            bsg_planets.name AS 'homeworld', bsg_people.age FROM bsg_people \
            LEFT JOIN bsg_planets ON bsg_people.homeworld = bsg_planets.id;`;
        const query2 = 'SELECT * FROM bsg_planets;';
        const [people] = await db.query(query1);
        const [homeworlds] = await db.query(query2);

        // Render the bsg-people.hbs file, and also send the renderer
        //  an object that contains our bsg_people and bsg_homeworld information
        res.render('bsg-people', { people: people, homeworlds: homeworlds });
    } catch (error) {
        console.error('Error executing queries:', error);
        // Send a generic error message to the browser
        res.status(500).send(
            'An error occurred while executing the database queries.'
        );
    }
});

app.get('/cust-orders', async function (req, res) {
    try {
        // Create and execute our queries
        // In query1, we use a JOIN clause to display the names of the Customer Orders
        const query1 = `
            SELECT Cust_Prod_Orders.cust_prod_order_id AS OrderNo, Customers.company_name AS Company, \ 
                Products.name AS Product, Cust_Prod_Orders.price AS Price, Cust_Prod_Orders.quantity AS QTY, \ 
                Cust_Prod_Orders.needs_delivery AS Delivery, Cust_Prod_Orders.recurring AS Recurring \
            FROM Cust_Prod_Orders 
            LEFT JOIN Customers 
                ON Cust_Prod_Orders.customer_id = Customers.customer_id
            LEFT JOIN Products 
                ON Cust_Prod_Orders.product_id = Products.product_id;`;

        // query3 is used to populate dropdown values
        const query2 = 'SELECT * FROM Customers;';

        // query4 is used to populate dropdown values
        const query3 = 'SELECT * FROM Products;';
        
        const [cust_orders] = await db.query(query1);
        const [customers] = await db.query(query2);
        const [products] = await db.query(query3);

        // Render the bsg-people.hbs file, and also send the renderer
        //  an object that contains our bsg_people and bsg_homeworld information
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
        // In query1, we use a JOIN clause to display the names of the Customer Orders
        const query1 = `
            SELECT Products.product_id AS ProductID, Products.name AS Name, Products.description AS Description, \
                Products.is_organic AS Organic, Suppliers.ranch AS Supplier
            FROM Products
            LEFT JOIN Suppliers 
                ON Products.supplier_id = Suppliers.supplier_id;`;

        const [products] = await db.query(query1);

        // Render the bsg-people.hbs file, and also send the renderer
        //  an object that contains our bsg_people and bsg_homeworld information
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
        // In query1, we use a JOIN clause to display the names of the Customer Orders
        const query1 = `
            SELECT Suppliers.supplier_id AS SupplierID, Suppliers.ranch AS Name, Suppliers.country AS Country, Suppliers.rep_name AS Representative, Suppliers.rep_email AS Email, Suppliers.rep_phone AS Phone
            FROM Suppliers;`;

        const [suppliers] = await db.query(query1);

        // Render the bsg-people.hbs file, and also send the renderer
        //  an object that contains our bsg_people and bsg_homeworld information
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
        // In query1, we use a JOIN clause to display the names of the Customer Orders
        const query1 = `
            SELECT Customers.customer_id AS CustomerID, Customers.company_name AS Name, Customers.address AS Address, Customers.is_local AS Local, Customers.buyer_name AS Buyer, Customers.buyer_email AS Email, Customers.buyer_phone AS Phone, Loyalty_Tiers.tier_name AS Tier
            FROM Customers
            LEFT JOIN Loyalty_Tiers
                ON Customers.loyalty_tier_id = Loyalty_Tiers.loyalty_tier_id;`;

        const [customers] = await db.query(query1);

        // Render the bsg-people.hbs file, and also send the renderer
        //  an object that contains our bsg_people and bsg_homeworld information
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

// ########################################
// ########## LISTENER

app.listen(PORT, function () {
    console.log(
        'Express started on http://localhost:' +
            PORT +
            '; press Ctrl-C to terminate.'
    );
});