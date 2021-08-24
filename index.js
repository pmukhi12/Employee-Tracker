// require files/node packages
const store = require('./DB/Store');
const inquirer = require('inquirer');
const questions = require('./utils/questions');

function menuPrompt() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["See all Employees", "See all Departments", "See all Roles", "Add an Employee", "Add an Department", "Add an Role", "Update an Employee's Role", "Exit"]
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
            default:
                quit()            
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
    setTimeout(() => menuPrompt(), 5000)
}

async function querySearchByLastName() {
    const { name } = await inquirer.prompt(searchbyLastName)
    store.searchbyLastNameSQL(name);
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
    catch (e) {
        console.log(e)
    }
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

