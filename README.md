# Monthly Payroll Calculator

## Description

_Duration: 8 Hours_

I was tasked with creating a monthly payroll calculator. Desire components included:

1. A form to input employee data; First Name, Last Name, ID, Title, and Annual Salary
2. Rendering the form data to the DOM in a manageable format.
3. Transforming the Annual Salary inputs for all employees to calculate the company's Monthly Payroll.
4. Ability to delete employees and their salaries as needed.

I created a JavaScript program written using jQuery to manipulate the DOM based on user interactions with an HTML form.

I used jQuery to track user interaction with the DOM buttons, &
JavaScript & jQuery to create functions to manipulate the user input data

When the user submits an employee through the form, the code creates a new object representing the employee and pushes it onto the global allEmployees array. The code then clears the form inputs, calculates the new total monthly payroll, and re-renders the table with the updated employee data.
When the user clicks the "Delete" button next to an employee in the table, the code first identifies the employee to be deleted by finding its ID value in the table. The code then removes the corresponding table row, removes the corresponding employee object from the allEmployees array, saves the deleted employee object to a new variable, recalculates the total monthly payroll by subtracting the monthly salary of the deleted employee, and re-renders the table with the updated data.
When an employee is added, the code also checks if the new total monthly payroll is greater than $20,000, and if so, sets the background color to red to indicate that the payroll is over budget. If the payroll decreases under $20,000, the background color is re-sets to white.

## Usage

1. Enter Employee Data
2. View Monthly Payroll Expense
3. Delete Employees As Necessary

## Built With

HTML
CSS
JavaScript
JQuery

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who taught me how to use jQuery!

## Support

If you have suggestions or issues, please email me at [lilylacosse@gmail.com]
