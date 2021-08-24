// require files/node packages
const store = require('./DB/Store');
const inquirer = require('inquirer');


function menuPrompt() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["See all Employees", "See all Departments", "See all Roles", "Add an Employee", "Add an Department", "Add a Role", "Update an Employee's Role", "Exit"]
    }
    ).then((res) => {
        switch (res.choice) {
            case 'See all Employees':
                seeAllEmployees();
                break;
            case 'See all Departments':
                seeAllDepartments();
                break;
            case 'See all Roles':
                seeAllRoles();
                break;
            case 'Add an Employee':
                addEmployee();
         
        }
    })
}
menuPrompt();

async function seeAllEmployees() {
    const allEmployees = await store.viewAllEmployees();
    console.table(allEmployees)
    setTimeout(() => menuPrompt(), 2000)
}

async function seeAllDepartments() {
    const allDepartments = await store.getDepartments();
    console.table(allDepartments)
    setTimeout(() => menuPrompt(), 2000)
}

async function seeAllRoles() {
    const allRoles = await store.getRoles();
    console.table(allRoles)
    setTimeout(() => menuPrompt(), 2000)
}






//     searchbyFirstName: {
//         name: "name",
//         type: "input",
//         message: "Please Input the Employee's First Name"
//     },
//     searchbyLastName: {
//         name: "name",
//         type: "input",
//         message: "Please Input the Employee's Last Name"
//     },
//   addEmployee: [
//     {
//         name: "first_name",
//         type: "input",
//         message: "Please Input the New Employee's First Name"
//     },
//     {
//         name: "last_name",
//         type: "input",
//         message: "Please Input the New Employee's Last Name"
//     }    
// ]
// }
async function addEmployee() {
    // get departments
   
        const departments = await store.getDepartments();
        const roles = await store.getRoles();
        const roleNames = roles.map(role => role.title)
        const employeeAnswers = await inquirer.prompt([
            // which Department
            {
                name: "departmentName",
                type: "list",
                message: "Employee of which department",
                choices: departments
            },
            // which Role
            {
                name: "roleName",
                type: "list",
                message: "What is the employee's role?",
                choices: roleNames
            },
            // Employee First Name
            {
                name: "firstName",
                type: "input",
                message: "What is the employee's first name?",
            },
            {
                name: "lastName",
                type: "input",
                message: "What is the employee's last name?",
            }

        ]);

        const departmentId = await store.getDepartmentID(employeeAnswers.departmentName);
        const roleId = await store.getRoleID(employeeAnswers.roleName);
        console.log(departmentId[0].id);
        console.log(roleId[0].id);
        


}



// async function menuQuestions() {
//     const { choice } = await inquirer.prompt(menu);

//     switch (choice) {
//         case 'Search by Employee First Name': return querySearchByFirstName();
//         case 'Search by Employee Last Name': return querySearchByLastName();
//         case 'Add Employee': return addEmployee();
//     }
// }

// menuQuestions();

