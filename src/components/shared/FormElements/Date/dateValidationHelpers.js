const d = new Date().toISOString().slice(0, 10); // Set todays date as yyyy-mm-dd

const dateRegex = /^((((19[0-9][0-9])|(2[0-9][0-9][0-9]))([-])(0[13578]|10|12)([-])(0[1-9]|[12][0-9]|3[01]))|(((19[0-9][0-9])|(2[0-9][0-9][0-9]))([-])(0[469]|11)([-])([0][1-9]|[12][0-9]|30))|(((19[0-9][0-9])|(2[0-9][0-9][0-9]))([-])(02)([-])(0[1-9]|1[0-9]|2[0-8]))|(([02468][048]00)([-])(02)([-])(29))|(([13579][26]00)([-])(02)([-])(29))|(([0-9][0-9][0][48])([-])(02)([-])(29))|(([0-9][0-9][2468][048])([-])(02)([-])(29))|(([0-9][0-9][13579][26])([-])(02)([-])(29)))$/; // Date regex http://regexlib.com/REDetails.aspx?regexp_id=1850

// determine if number is between two values 
const between = (number, min, max) => number >= min && number <= max;

// return date as an array [yyyy, mm, dd]
const dateSplit = date => date.split('-');

// make sure day entry is valid
const validateDay = value => between(dateSplit(value)[2], 1, 31)

// make sure month entry is between 1 & 12
const validateMonth = value => between(dateSplit(value)[1], 1, 12);

// check if date is in the past (years ago)
const pastDate = (value, yearsAgo = 0) => d > value && dateSplit(value)[0] <= dateSplit(d)[0] - yearsAgo;

const dateValidationHelpers = {
  dateRegex,
  validateDay,
  validateMonth,
  pastDate,
}

export default dateValidationHelpers;