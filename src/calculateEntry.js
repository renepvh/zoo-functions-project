const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const publicTotal = { adult: 0, senior: 0, child: 0 };
  entrants.forEach((publiC) => {
    if (publiC.age < 18) {
      publicTotal.child += 1;
    } else if (publiC.age < 50) {
      publicTotal.adult += 1;
    } else {
      publicTotal.senior += 1;
    }
  });
  return publicTotal;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const participants = countEntrants(entrants);
  const entrance = [prices];
  entrance.push(participants);

  const result = entrance
    .reduce(((ac, cur) => ac.child * cur.child + ac.adult * cur.adult + ac.senior * cur.senior));
  return result;
}

module.exports = { calculateEntry, countEntrants };
