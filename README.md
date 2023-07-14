# BankApplication_WebPage
**#This is a Sample Bank web application built using HTML, CSS, and JavaScript.**


Certainly! Here's a description of the code for the bank application HTML page that includes withdraw, deposit, and balance functionalities:

**HTML Structure (bank.html)**:

The HTML page consists of a container div that holds the bank application content.
The withdraw section is represented by a div with an id of "withdrawSection". It contains a form with an input field for the withdraw amount and a submit button.
The deposit section is represented by a div with an id of "depositSection". It contains a form with an input field for the deposit amount and a submit button.
The balance section is represented by a div with an id of "balanceSection". It contains a button labeled "Check Balance" and a paragraph to display the balance result.
The page includes links to an external CSS file ("style.css") and an external JavaScript file ("script.js").

**CSS Styling (style.css):**

The CSS file contains styles to define the appearance of the bank application elements.
It sets the font-family, margin, padding, and background-color for the body.
The container class sets the width, margin, padding, and border of the bank application container.
Styles for input fields, submit buttons, error messages, and balance result are also defined.

**JavaScript Functionality (script.js)**:

The JavaScript file contains the logic for withdraw, deposit, and balance operations.
A variable named "balance" is initialized with a starting value of 5000 to represent the user's bank balance.
The "withdrawForm" submit event listener is added to capture the form submission for withdraw operation.
When the form is submitted, it checks if the withdraw amount entered is a valid positive number and ensures that it is not greater than the available balance.
If the withdrawal amount is valid and within the available balance, the balance is updated by subtracting the withdrawal amount, and a success message is displayed.
The "depositForm" submit event listener is added to capture the form submission for the deposit operation.
When the form is submitted, it checks if the deposit amount entered is a valid positive number.
If the deposit amount is valid, the balance is updated by adding the deposit amount, and a success message is displayed.
The "checkBalanceBtn" click event listener is added to capture the button click for checking the balance.
When the button is clicked, it displays the current balance amount in the designated paragraph.
By using this bank application HTML page, users can perform withdraw, deposit, and balance operations on their bank account.
