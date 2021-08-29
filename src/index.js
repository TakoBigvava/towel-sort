// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    let i = 0;
    if(arguments[0] === undefined ){
      return result
    }else{
      while (i < matrix.length) {
        if (i % 2 === 0) {
            result = result.concat(matrix[i]);
        } else {
            result = result.concat(matrix[i].reverse());
        }
        i++;
    }
    }

    return result;
};
