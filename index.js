// require files/node packages
const store = require('./DB/Store');
const inquirer = require('inquirer');
const { menu } = require('./utils/questions');

store.read()
    .then((data) => console.log(data));