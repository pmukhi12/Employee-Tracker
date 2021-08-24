DROP DATABASE IF EXISTS employees;
CREATE database employees;

USE employees;

CREATE TABLE department (
  id INT NOT NULL Auto_Increment PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);


CREATE TABLE role (
  id INT NOT NULL Auto_Increment PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary decimal NOT NULL,
  department_id INT NOT NULL,
  foreign key (department_id) references department(id) ON DELETE Cascade
);

CREATE TABLE employee (
  id INT NOT NULL Auto_Increment PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  foreign key (role_id) references role(id) ON DELETE Cascade,
  foreign key (manager_id) references employee(id) ON DELETE Set NULL
);





