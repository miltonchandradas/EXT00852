const cds = require("@sap/cds");
const { v4: uuidv4 } = require("uuid");

module.exports = async (srv) => {
  const { Employees } = srv.entities;

  srv.on("READ", Employees, async (req) => {
    let employees = [];
    for (let i = 0; i < 1500; i++) {
      employees.push({
        ID: uuidv4(),
        name: `Milton - ${i}`,
        age: i,
      });
    }

    employees.$count = 1500;
    return employees;
  });
};
