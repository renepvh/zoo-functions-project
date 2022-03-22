const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objByLocation = () => species.reduce((acc, { location }) => {
  acc[location] = [];
  return acc;
}, {});

const filterSex = ({ residents }, options) => {
  if (!options.sex) {
    return residents.map(({ name }) => name);
  }
  return residents.filter(({ sex }) => sex === options.sex)
    .map(({ name }) => name);
};

const includeNames = (options) => species.reduce((objectBase, specie) => {
  const animalNames = {};
  if (!options.sorted) {
    animalNames[specie.name] = filterSex(specie, options);
  } else {
    animalNames[specie.name] = filterSex(specie, options).sort();
  }
  objectBase[specie.location].push(animalNames);
  return objectBase;
}, objByLocation());

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return species.reduce((acc, { location, name }) => {
      acc[location].push(name);
      return acc;
    }, objByLocation());
  }
  return includeNames(options);
}

module.exports = getAnimalMap;
