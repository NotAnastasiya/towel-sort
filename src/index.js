
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){
    return [];
  }
  let newMatrix = matrix;
  let reverseMatrix = [];  
  newMatrix.forEach(function(item, index){
    if (index % 2 !== 0) {
      item = item.reverse();
    }
    reverseMatrix = [...reverseMatrix,...item];
  })
  return reverseMatrix;
}
