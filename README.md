# cs340-DatabaseProject
A project to create a web-based front end for a MySQL data with CRUD functionality

NOTE: I excluded my local node_modules folder from this repo. This should be installed on your local machine within the same directory as the project as well, when testing/running the program.

**Below I will summarize project citations by project file**

--

**app.js**

Used starter code from following Canvas explorations for Express, DB, and HBS setup and Listener blocks. Adapted starter code for all js routes: 
    "Web Application Technology Canvas",
    "Implementing CUD operations in your app"
Links: 
    https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
    https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968

Citation for use of AI Tools:
Date: 5/19/2025
Scope: line 313-314
Summary of prompts used:
"Looking at the lines I have highlighted in my app.js file, can I put multiple queries in a single await db.query command so [[rows]] contains results from multiple queries?”
AI Source URL: https://chat.openai.com/

**PL.sql**

Adapted starter code from "Implementing CUD operations in your app" exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968

**main.hbs**

Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

Citation for use of AI Tools:
Date: 5/21/2025
Scope: line 39
Summary of prompts used:
"Within main.hbs, I want to add a button to the header that when clicked makes a request to the server that results in the DB 
being reset, which is the code I currently have highlighted. Do I have to do this within a form element in order for it to work
or can I leverage another method?”
AI Source URL: https://chat.openai.com/

**cust-order.hbs**

Adapted starter code from following Canvas explorations: 
    "Web Application Technology Canvas",
    "Implementing CUD operations in your app"
Links: 
    https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
    https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968

Citation for use of AI Tools:
Date: 5/30/2025
Scope: lines 152-182
Summary of prompts used:
"How can I properly add a confirmation modal to my DELETE button functionality?”
AI Source URL: https://chat.openai.com/

**customers.hbs**
    
Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

Citation for use of AI Tools:
Date: 5/12/2025
Scope: line 42
Summary of prompts used:
Leveraged ChatGPT to assist with displaying boolean values (1s and 0s) as Yes/No via a conditional
Prompt example: These two columns are binary, with 1 indicating "Yes" and 0 indicating "No". Is there a way to display the data outputted for this column in each row as "Yes" or "No" depending on whether the value is 1 or 0?

**home.hbs**

Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

**loyalty-tiers.hbs**

Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

**prod-purchases.hbs**

Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

**products.hbs**

Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

Citation for use of AI Tools:
Date: 5/12/2025
Scope: line 42
Summary of prompts used:
Leveraged ChatGPT to assist with displaying boolean values (1s and 0s) as Yes/No via a conditional
Prompt example: These two columns are binary, with 1 indicating "Yes" and 0 indicating "No". Is there a way to display the data outputted for this column in each row as "Yes" or "No" depending on whether the value is 1 or 0?

**purch-order.hbs**

Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

**suppliers.hbs**

Adapted starter code from Web Application Technology Canvas exploration
Link: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948

**style.css**

Leveraged starter code from Web Application Technology Canvas exploration Link: https: //canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
