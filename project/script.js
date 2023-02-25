$(document).ready(onReady);

function onReady() {
  console.log("JQ");

  $("#submit-btn").on("click", submitEmployee);
}

let allEmployees = [];

function submitEmployee() {
  console.log("START OF submitEmployee()");

  // gather form data
  const addFirstName = $("#first-name").val();
  const addLastName = $("#last-name").val();
  const addID = $("#id").val();
  const addTitle = $("#title").val();
  const addAnnualSalary = $("#annual-salary").val();

  //   if (addFirstName && addLastName && addID && addTitle && addAnnualSalary) {
  let newEmployee = {
    firstName: addFirstName,
    lastName: addLastName,
    id: addID,
    title: addTitle,
    annualSalary: addAnnualSalary,
  };
  console.log("newEmployee:", newEmployee);

  allEmployees.push(newEmployee);
  console.log("allEmployees update:", allEmployees);

  resetInputs();

  calcMonthlyCosts();

  render();

  //   } else {
  //     alert("Please Enter Employee Data");
  //   }

  console.log("END OF submitEmployee");
}

function resetInputs() {
  console.log("START resetInputs");
  $("input").val("");
  //   $("#first-name").val("");
  //   $("#last-name").val("");
  //   $("#id").val("");
  //   $("#title").val("");
  //   $("#annual-salary").val("");
  console.log("END resetInputs");
}

function calcMonthlyCosts() {
  console.log("START calcMonthlyCosts ");
  let totalMonthlyPayroll = 0;
  for (let employee of allEmployees) {
    totalMonthlyPayroll += Number(employee.annualSalary) / 12;
  }
  console.log(totalMonthlyPayroll);
  $("#total-monthly-payroll").html(`$${totalMonthlyPayroll}`);
  if (totalMonthlyPayroll > 20000) {
    $("#h2-total-payroll").css({ "background-color": "red" });
  }
  console.log("END calcMonthlyCosts ");
}

function render() {
  console.log("START render()");
  emptyTable();

  // we are trying to render an array, so we have to loop through it
  for (let employee of allEmployees) {
    // console.log("employee", employee);
    $("#data-table").append(`<tr class="tr">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button id="delete-btn">Delete</button></td>
        </tr>`);
  }
  console.log("END render()");
}

function emptyTable() {
  console.log("START emptyTable()");
  $(".tr").remove();
  console.log("END emptyTable()");
}
