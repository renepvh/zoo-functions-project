const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const newArray = [];
  ids.forEach((item) => newArray.push(species.find((element) => element.id === item)));
  return newArray;
}

module.exports = getSpeciesByIds;
