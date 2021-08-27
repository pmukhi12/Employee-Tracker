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
    getManagers() {
        return this.connection.query('SELECT DISTINCT manager_id FROM employee Where manager_id is not null');
    };

    getRoles() {
        return this.connection.query('SELECT * FROM role');
    };

    getRoleID(roleName) {
        return this.connection.query('SELECT id FROM role Where title = "' + roleName + '"');
    };

    addEmployeetoDB(first_name, last_name, roleId, managerId) {
        return this.connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("'+ first_name + '", "' + last_name + '", "' + roleId + '", "' + managerId +'")');
    };

    addDepartment(departmentName) {
        return this.connection.query('INSERT INTO department (name) VALUES ("'+ departmentName + '")');
    };





    getIDFromDepartment() {
        return this.connection.query('SELECT Id FROM employee.department WHERE ')
    }

};


module.exports = new Store();