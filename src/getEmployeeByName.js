const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    const first = employees.find((item) => employeeName === item.firstName);
    const last = employees.find((item) => employeeName === item.lastName);
    return first || last;
  }
  return {};
}

module.exports = getEmployeeByName;
