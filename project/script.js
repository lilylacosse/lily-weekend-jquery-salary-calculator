$(document).ready(onReady);

function onReady() {
  console.log("JQ");

  $("#submit-btn").on("click", submitEmployee);
}

let allEmployees = [];

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

function emptyTable() {
  console.log("START emptyTable()");
  $(".tr").remove();
  console.log("END emptyTable()");
}

function render() {
  console.log("In render()");
  emptyTable();

  // we are trying to render an array, so we have to loop through it
  for (let employee of allEmployees) {
    console.log("employee", employee);
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

function submitEmployee() {
  console.log("START OF submitEmployee()");

  // gather form data
  const addFirstName = $("#first-name").val();
  const addLastName = $("#last-name").val();
  const addID = $("#id").val();
  const addTitle = $("#title").val();
  const addAnnualSalary = $("#annual-salary").val();

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

    render();
    //resetInputs();
  } else {
    alert("Please Enter Employee Data");
  }

  console.log("END OF submitEmployee");
}
