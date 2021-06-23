// require files/node packages
const store = require('./DB/Store');
const inquirer = require('inquirer');
const { menu, searchbyFirstName } = require('./utils/questions');
const questions = require('./utils/questions');
const { getDepartments } = require('./DB/Store');

async function querySearchByFirstName() {
    const { name } = await inquirer.prompt(searchbyFirstName)
    store.searchbyFirstNameSQL(name);
}

async function querySearchByLastName() {
    const { name } = await inquirer.prompt(searchbyLastName)
    store.searchbyLastNameSQL(name);
}

async function addEmployee() {
    // get departments
    try {
        const departments = await store.getDepartments();
        const roles = await store.getRoles();
        const roleNames = roles.map(role => role.title)
        const employeeAnswers = await inquirer.prompt([
        ...questions.addEmployee,
        // which Department
        {
            name: "department_id",
            type: "list",
            message: "Employee of which department",
            choices: departments
        },
        // which Role
        {
            name: "role_id",
            type: "list",
            message: "What is the employee's role?",
            choices: roleNames
        }
    ])

    }
    catch(e)
    {
        console.log(e)
    }
}



async function menuQuestions() {
    const { choice } = await inquirer.prompt(menu);

    switch (choice) {
        case 'Search by Employee First Name': return querySearchByFirstName();
        case 'Search by Employee Last Name': return querySearchByLastName();
        case 'Add Employee': return addEmployee();
    }
}

menuQuestions();

