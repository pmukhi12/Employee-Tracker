const connection = require('./connection');

class Store {
    constructor() {
        this.connection = connection;
    };

    read() {
        return this.connection.query('Select * FROM employee');
    };
    searchbyFirstNameSQL(name) {
        return this.connection.query('SELECT * FROM employee WHERE first_name = ?', name);
    };
    getDepartments() {
        return this.connection.query('SELECT * FROM department');
    };
    getRoles() {
        return this.connection.query('SELECT * FROM role');
    };

};


module.exports = new Store();