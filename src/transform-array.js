module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {result.push(arr[i+1]);}
      else if (arr[i] === '--double-prev') {result.push(arr[i-1]);}
      else if (arr[i] === '--discard-prev') {result.pop();}
      else if (arr[i] === '--discard-next') {i++}
      else result.push(arr[i]);
    }
    return result.filter(item => item !== undefined);
};