
# Full-Stack MySQL CRUD Application

This project was developed as part of the CS340: Introduction to Databases course at Oregon State University. It is a full-stack web application that interfaces with a relational MySQL database using Node.js, Express, and Handlebars. 

For this project, I owned development of the app's frontend, backend, and creation of the database schema. A paired classmate assisted with normalization of the DB schema and creation of SQL queries (DDL, DML, and PL/SQL).

## 🧩 Features

- View, insert, update, and delete data from a MySQL database
- Front-end forms and modals for seamless user interactions
- Dynamic table rendering using Handlebars templating
- Modular routing with Express for each entity
- Stored procedures and multi-table joins for complex logic
- Clean UI with client-side validation and confirmation dialogs

---

## 🛠️ Technologies Used

| Layer         | Technologies                                 |
|--------------|----------------------------------------------|
| Frontend     | HTML, CSS, JavaScript, Handlebars (HBS)      |
| Backend      | Node.js, Express.js                          |
| Database     | MySQL, SQL (DDL, DML, PL/SQL)                |
| Dev Tools    | npm, Git, VS Code, Postman                   |

---

## 🗃️ Database

The application uses a normalized MySQL schema with several interrelated tables. 

<img width="930" height="474" alt="ProjStep3Final_Schema" src="https://github.com/user-attachments/assets/57367483-c078-4aee-a62b-85fd5308c8c2" />


SQL scripts are provided for:

- `DDL.sql` – Table creation
- `DML.sql` – Sample data population
- `PL.sql` – Stored procedures

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MySQL server installed and running
- Git

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/DevLo3/relational-db-webapp.git
    cd relational-db-webapp
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file or configure `database/db-connector.js` with your MySQL credentials:
    ```js
    const db = mysql.createConnection({
      host: 'localhost',
      user: 'your_mysql_user',
      password: 'your_password',
      database: 'your_database_name'
    });
    ```

4. Import the database schema:
    - Run `DDL.sql` and `DML.sql` in your MySQL client or via command line.

5. Start the server:
    ```bash
    npm run dev
    ```

6. Visit the app at:
    ```
    http://localhost:3000
    ```
