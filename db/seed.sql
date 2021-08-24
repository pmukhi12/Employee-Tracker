Use employees;

Insert Into department (name) Values ('Finance'), ('Marketing'), ('Sales');

Insert Into role (title, salary, department_id) Values ('Manager', 100000, 2), ('Intern', 130000, 3), ('Senior Associate', 104000, 2);

Insert Into employee (first_name, last_name, role_id, manager_id) Values ('John', 'Doe', 1, NULL), ('James', 'Smith', 2, 1), ('Jason', 'Jones', 3, 1);

