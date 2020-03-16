module.exports = function getSeason( date ) {
  if(!date) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty("getMonth")) {
    throw new Error;
  }

  let month = date.getMonth();

  function month2Season(month) {
    return (month >= 0 && month < 2 || month == 11 ) ? 'winter' :
        (month >= 2 && month < 5) ? 'spring' :
        (month >= 5 && month < 8) ? 'summer' :
        (month >= 8 && month < 11) ? 'fall' : 'Wrong date';
  }

  return month2Season(month);
};
