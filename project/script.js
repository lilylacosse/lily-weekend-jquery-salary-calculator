$(document).ready(onReady);

function onReady() {
  console.log("JQ");

  $("#submit-btn").on("click", submitEmployee);

  $("#data-table").on("click", "#delete-btn", deleteEmployee);
  // $("#data-table").on("click", "#delete-btn", subtractMonthlyCosts);
}

let allEmployees = [];
let totalMonthlyPayroll = 0;
let employeeToDelete = $(this).closest("tr");
let valueMatchID = employeeToDelete.children().eq(2).text();
let deletedEmployee = {};

function submitEmployee() {
  console.log("START OF submitEmployee()");

  // gather form data
  const addFirstName = $("#first-name").val();
  const addLastName = $("#last-name").val();
  const addID = $("#id").val();
  const addTitle = $("#title").val();
  const addAnnualSalary = Number($("#annual-salary").val());

  console.log("addAnnualSalary:", addAnnualSalary);

  if (addFirstName && addLastName && addID && addTitle && addAnnualSalary) {
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
  } else {
    alert("Please Enter Employee Data");
  }

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
  totalMonthlyPayroll = 0;
  for (let employee of allEmployees) {
    totalMonthlyPayroll += Number(employee.annualSalary) / 12;
  }
  console.log(totalMonthlyPayroll);
  $("#total-monthly-payroll").html(
    `${totalMonthlyPayroll.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}`
  );
  if (totalMonthlyPayroll > 20000) {
    $("#h2-total-payroll").css({ "background-color": "red" });
  }
  console.log("END calcMonthlyCosts ");
  return totalMonthlyPayroll;
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
        <td>${employee.annualSalary.toLocaleString("en", {
          style: "currency",
          currency: "USD",
        })}</td>
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

function deleteEmployee() {
  console.log("START deleteEmployee():");

  employeeToDelete = $(this).closest("tr");
  console.log("Employee to Delete:", employeeToDelete);
  valueMatchID = employeeToDelete.children().eq(2).text();

  console.log("Employee to Delete:", valueMatchID);

  employeeToDelete.remove();

  let newAllEmployees = [];

  for (let employee of allEmployees) {
    if (valueMatchID !== employee.id) {
      newAllEmployees.push(employee);
    } else {
      deletedEmployee = employee;
    }
  }
  allEmployees = newAllEmployees;
  console.log("allEmployees[]", allEmployees);
  console.log("deletedEmployee:", deletedEmployee);

  subtractMonthlyCosts();
  render();
  console.log("END deleteEmployee()");

  return valueMatchID;
}

function subtractMonthlyCosts() {
  console.log("START subtractMonthlyCosts() ");
  console.log("valueMatchId:", valueMatchID);
  console.log("deletedEmployee:", deletedEmployee);

  if (valueMatchID === deletedEmployee.id) {
    console.log("This salary will be deleted", deletedEmployee.annualSalary);
    totalMonthlyPayroll -= Number(deletedEmployee.annualSalary) / 12;
  }

  console.log("totalMonthlyPayroll Now:", totalMonthlyPayroll);

  $("#total-monthly-payroll").html(
    `${totalMonthlyPayroll.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}`
  );

  if (totalMonthlyPayroll < 20000) {
    $("#h2-total-payroll").css({ "background-color": "#4f8b8c" });
  }
  console.log("END subtractMonthlyCosts ");
}
