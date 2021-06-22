const connection = require('./connection');

class Store {
    constructor() {
        this.connection = connection;
    }

    read() {
        return this.connection.query('Select * FROM employee')
    }
}


module.exports = new Store()