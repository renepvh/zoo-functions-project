const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allAnimals = () => species.reduce((acc, { name, residents }) => {
  acc[name] = residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (!animal) {
    return allAnimals();
  }
  const animaisRes = species.find(({ name }) => name === animal.specie).residents;
  if (!animal.sex) {
    return animaisRes.length;
  }
  return animaisRes.filter(({ sex }) => sex === animal.sex).length;
}

module.exports = countAnimals;
