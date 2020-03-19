module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes;
    let separator = options.separator || '+';
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator || '|';

    str = (typeof(str) === 'string') ? str : String(str);
    addition = (typeof(addition) === 'string') ? addition : String(addition);
    repeatTimes = (repeatTimes === undefined) ? 1 : repeatTimes;
    additionRepeatTimes = (additionRepeatTimes === undefined) ? 1 : additionRepeatTimes;
    additionRepeatTimes = (addition === 'undefined') ? 0 : additionRepeatTimes;

    let result = '';
    
    for (i = 0; i < repeatTimes; i++) {
      result += str;
        for (j = 0; j < additionRepeatTimes; j++) {
          result += addition;
          if (j < additionRepeatTimes - 1) {result += additionSeparator;}
        }
      if (i < repeatTimes - 1) {result += separator;}
    }

    return result;

};
  