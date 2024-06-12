const cds = require("@sap/cds");
const { v4: uuidv4 } = require("uuid");

module.exports = async (srv) => {
  const { Employees } = srv.entities;

  srv.on("READ", Employees, async (req) => {
    let employees = [];
    for (let i = 0; i < 500; i++) {
      employees.push({
        ID: uuidv4(),
        name: `Milton - ${i}`,
        age: i,
      });
    }

    employees.$count = 500;
    return employees;
  });
};
