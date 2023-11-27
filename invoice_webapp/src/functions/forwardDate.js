import moment from 'moment';

function getForwardDate(numberDaysForward) {
  const today = moment();
  const forwardDate = today.clone().add(numberDaysForward, 'days');

  while (forwardDate.diff(today, 'months', true) > 1) {
    forwardDate.subtract(1, 'months');
  }
  
    return forwardDate.format('YYYY-MM-DD');
}

export default getForwardDate