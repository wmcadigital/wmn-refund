
const dateToday = new Date();
const dateTodayAsString = `${dateToday.getFullYear()}-${dateToday.getMonth() + 1}-${dateToday.getDate()}`

// helper function to determine if a number is between two values 
const between = (number, min, max) => number >= min && number <= max;
// returns date as a array [yyyy, mm, dd]
const dateAsArray = date => date.split('-');

// returns true if year is a leap year
const leapYear = (year) => {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

// make sure day entry is valid
const validateDay = value => between(dateAsArray(value)[2], 1, 31)

// make sure month entry is between 1 & 12
const validateMonth = value => between(value.split('-')[1], 1, 12);

// make sure date entry is valid
const validateDate = value => {
  let valid;
  const monthsWith30days = ['04', '06', '09', '11']
  
  // if month is february
  if(dateAsArray(value)[1] === '02') {
    const max = leapYear(dateAsArray(value)[0]) ? 29 : 28;
    valid = between(dateAsArray(value)[2], 1, max);
  }
  // if month has 30 days
  else if(monthsWith30days.includes(dateAsArray(value)[1])) {
    valid = between(dateAsArray(value)[2], 1, 30);
  }
  else {
    valid = between(dateAsArray(value)[2], 1, 31);
  }

  return valid;
}

// check if date is in the past
const pastDate = value => dateTodayAsString > value;

const dateValidationHelpers = {
  validateDay,
  validateDate,
  validateMonth,
  pastDate
}

export default dateValidationHelpers;
