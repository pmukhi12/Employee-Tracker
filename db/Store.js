const connection = require('./connection');

class Store {
    constructor() {
        this.connection = connection;
    };

    viewAllEmployees() {
        return this.connection.query('Select * FROM employee');
    };


    getDepartments() {
        return this.connection.query('SELECT * FROM department');
    };
    getDepartmentID(department_name) {
        return this.connection.query('SELECT id FROM department Where name = "'+ department_name + '"');
    };

    getRoles() {
        return this.connection.query('SELECT * FROM role');
    };

    getRoleID(roleName) {
        return this.connection.query('SELECT id FROM role Where title = "' + roleName + '"');
    };

    addEmployee(title, salary, departmentId) {
        return this.connection.query('INSERT INTO employee (title, salary, department_id) VALUES ("'+ title + '", "' + salary + '", "' + department_id + '")');
    };

    addRole(title, salary, departmentId) {
        return this.connection.query('INSERT INTO role (title, salary, department_id) VALUES ("'+ title + '", "' + salary + '", "' + departmentId + '")');
    };





    getIDFromDepartment() {
        return this.connection.query('SELECT Id FROM employee.department WHERE ')
    }

};


module.exports = new Store();