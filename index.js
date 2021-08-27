// require files/node packages
const store = require('./DB/Store');
const inquirer = require('inquirer');


function menuPrompt() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["See all Employees", "See all Departments", "See all Roles", "Add an Employee", "Add a Department"]
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
            case 'Add a Department':
                addDepartment();
         
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

async function addEmployee() {
    // get departments
   
        const departments = await store.getDepartments();
        const roles = await store.getRoles();
        const managers = await store.getManagers();
        const managerIds = await managers.map(manager => manager.manager_id)
        const roleIds = roles.map(role => role.id)
        const allRoles = await store.getRoles();
        console.table(allRoles)
        const allEmployees = await store.viewAllEmployees();
        console.table(allEmployees)
        const employeeAnswers = await inquirer.prompt([
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
            },
            {
                name: "managerID",
                type: "list",
                message: "What is the employee's manager's ID (see ID column of secong table above)?",
                choices: managerIds
            },
            {
                name: "roleID",
                type: "list",
                message: "What is the employee's role ID (see ID column of first table above)?",
                choices: roleIds
            }

        ]);

        store.addEmployeetoDB(employeeAnswers.firstName, employeeAnswers.lastName, employeeAnswers.managerID, employeeAnswers.roleID)
        menuPrompt()
        


}

async function addDepartment() {
    const departmentAnswers = await inquirer.prompt([
        // Employee First Name
        {
            name: "departmentName",
            type: "input",
            message: "What is the department name?",
        }
    ])
    
    store.addDepartment(departmentAnswers.departmentName)
    menuPrompt()

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

