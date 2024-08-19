const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', specialization: 'Javascript', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', specialization: 'Python', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', specialization: 'Java', salary: 60000 },
    //... More employee records can be added here
];

 // Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
        
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) =>
        acc + employee.salary, 0);
    
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees =
        employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay =
        hrEmployees.map((employee, index) =>
            `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');

    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee =
        employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function displayJavascriptEmployees(specialization) {
    const jsEmployee =
        employees.find(employee => employee.specialization === specialization);
    if(!jsEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            'no employee has been found with this specialization';
        return
    }
    document.getElementById('employeesDetails').innerHTML =
    `<p>${jsEmployee.id}: ${jsEmployee.name}: ${jsEmployee.age} - ${jsEmployee.department} - $${jsEmployee.salary}</p>`;
}