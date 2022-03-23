const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const oldestAnimal = Object.values(species.find((specie) =>
    specie.id === employees
      .find(({ id }) => id === employeeId).responsibleFor[0]).residents
    .reduce((acc, curr) => (acc.age < curr.age ? curr : acc)));
  return oldestAnimal;
}

module.exports = getOldestFromFirstSpecies;
