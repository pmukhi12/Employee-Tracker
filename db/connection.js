const util = require('util');
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    
// update with mySql username
    user: "",

//update with mySql Password
    password: "",

    database: "employees"
})

connection.connect();


connection.query = util.promisify(connection.query);


module.exports = connection;