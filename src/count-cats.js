module.exports = function countCats( matrix ) {
  let counter = 0;
  
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "^^") counter++;
    }
  }

  return counter;
};
