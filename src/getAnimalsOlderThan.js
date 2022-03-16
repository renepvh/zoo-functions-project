const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // usei o find primeiro porque precisa filtrar pelo nome do animal.
  const nameAnimal = species.find((item) => item.name === animal);
  // apos filtrar o nome do animal, so tinha que acessar a chave residents e percorrer por todas as age contida pra ver se passava pela condiçao.
  return nameAnimal.residents.every((item) => item.age > age);
}

module.exports = getAnimalsOlderThan;
