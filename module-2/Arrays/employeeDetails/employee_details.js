const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specializaton: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specializaton: 'Java' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specializaton: 'C#' },
      { id: 4, name: 'Hector', age: 29, department: 'HR', salary: 55000, specializaton: 'JavaScript' }
];
    
const employeesDetails = document.getElementById('employeesDetails');

//If arrow function has body {} for multilines then explicite return statement should be used
function displayEmployees(){
    const employeesList = employees.map((employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    employeesDetails.innerHTML = employeesList;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0); //0 is the initial total value
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesHTML = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
     employeesDetails.innerHTML = hrEmployeesHTML;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee)
        employeesDetails.innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    else
        employeesDetails.innerHTML = 'no employee has been found with this ID';
}

function findEmployeeBySpecialization(specializaton){
    const foundEmployee = employees.find(employee => employee.specializaton === specializaton);
    if (foundEmployee)
        employeesDetails.innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specializaton}</p>`;
    else
        employeesDetails.innerHTML = 'no employee has been found with this specialization';
}