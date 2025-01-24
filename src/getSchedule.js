const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const availableDay = (day) => species.reduce((acc, { name, availability }) => {
  if (availability.includes(day)) {
    acc.officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    acc.exhibition.push(name);
  }
  if (hours[day].open === 0 && hours[day].close === 0) {
    acc.officeHour = 'CLOSED';
    acc.exhibition = 'The zoo will be closed!';
  }
  return acc;
}, { officeHour: '', exhibition: [] });

function getSchedule(scheduleTarget) {
  if (species.some(({ name }) => name === scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return Object.keys(hours).reduce((acc, day) => {
    if (!scheduleTarget || !Object.keys(hours).includes(scheduleTarget)) {
      acc[day] = availableDay(day);
      return acc;
    }
    acc[scheduleTarget] = availableDay(scheduleTarget);
    return acc;
  }, {});
}

module.exports = { getSchedule };
