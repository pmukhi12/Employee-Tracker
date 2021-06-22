// require files/node packages
const store = require('./DB/Store');
const inquirer = require('inquirer');
const { menu, searchbyFirstName } = require('./utils/questions');
const questions = require('./utils/questions');

async function querySearchByFirstName() {
    const { name } = await inquirer.prompt(searchbyFirstName)
    store.searchbyFirstNameSQL(name);
}

async function querySearchByLastName() {
    const { name } = await inquirer.prompt(searchbyLastName)
    store.searchbyLastNameSQL(name);
}


async function menuQuestions() {
    const { choice } = await inquirer.prompt(menu);

    switch (choice) {
        case 'Search by Employee First Name': return querySearchByFirstName();
        case 'Search by Employee Last Name': return querySearchByLastName();

    }
}

menuQuestions();

