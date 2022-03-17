const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// na funçao isManager testa se o id passado corresponde ao gerente do objeto; declaro o return como a variavel isGerente = false, assim o retorno padrao já é false, testo usando o forEach com if.
function isManager(id) {
  let isGerent = false;
  employees.forEach((item) => {
    if (item.managers.length !== 0 && !isGerent) {
      const haveManager = item.managers;
      isGerent = haveManager.some((element) => element === id);
    }
  });
  return isGerent;
}

function getRelatedEmployees(managerId) {
  const man = isManager(managerId);
  if (man === true) {
    const isManagerId = employees.filter((item) => item.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
    return isManagerId;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
