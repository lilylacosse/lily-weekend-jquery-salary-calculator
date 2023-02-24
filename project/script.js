$(document).ready(onReady);

function onReady() {
  console.log("JQ");

  $("#submit-btn").on("click", submitEmployee);
}
let allEmployees = [];

function emptyTable() {
  console.log("In emptyTable()");
  $("#original-message").empty();
}

function submitEmployee() {
  console.log("In submitEmployee()");
  // empty original form data
  // i.e. "no employees yet!"
  emptyTable();
  // gather form data
  const addFirstName = $("#first-name").val();
  const addLastName = $("#last-name").val();
  const addID = $("#id").val();
  const addTitle = $("#title").val();
  const addAnnualSalary = $("#annual-salary").val();

  let newEmployee = {
    firstName: addFirstName,
    lastName: addLastName,
    id: addID,
    title: addTitle,
    annualSalary: addAnnualSalary,
  };
  console.log("newEmployee:", newEmployee);

  allEmployees.push(newEmployee);
}

function emptyTable() {
  console.log("In emptyTable()");
  $("#original-message").empty();
}
