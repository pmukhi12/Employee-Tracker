module.exports = {
    menu: {
        name: "choice",
        type: "list",
        message: "What's next?",
        choices: ["Search by Employee First Name", "Search by Employee Last Name", "Add Employee"]
    },
    searchbyFirstName: {
        name: "name",
        type: "input",
        message: "Please Input the Employee's First Name"
    },
    searchbyLastName: {
        name: "name",
        type: "input",
        message: "Please Input the Employee's Last Name"
    },
  addEmployee: [
    {
        name: "first_name",
        type: "input",
        message: "Please Input the New Employee's First Name"
    },
    {
        name: "last_name",
        type: "input",
        message: "Please Input the New Employee's Last Name"
    }    
]
}

