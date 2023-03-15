# Monthly Payroll Calculator

## Description

_Duration: 8 Hours_

I was tasked with creating a monthly payroll calculator. Desire components included:

1. A form to input employee data; First Name, Last Name, ID, Title, and Annual Salary
2. Rendering the form data to the DOM in a manageable format.
3. Transforming the Annual Salary inputs for all employees to calculate the company's Monthly Payroll.
4. Ability to delete employees and their salaries as needed.

I created a JavaScript program written using jQuery to manipulate the DOM based on user interactions with an HTML form.

When the user submits an employee ,a new object representing the employee is created and pushed to the global allEmployees array. 
The form inputs are cleared, the new total monthly payroll is calculated, and the DOM displays the updated information.
When the user deletes an employee, the corresponding row and monthly payroll are deleted. 
If monthly payroll exceeds $20,000, the css changes to indicate a problem. If the payroll is reduced, the css changes back to normal 

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

Thanks to Prime Digital Academy (www.primeacademy.io) who taught me how to use jQuery!

## Support

If you have suggestions or issues, please email me at [lilylacosse@gmail.com]
