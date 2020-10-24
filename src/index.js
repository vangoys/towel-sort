module.exports = function towelSort (matrix) {

  if (matrix == undefined || matrix.length < 1) 

  return []; 
 
  let value = [];

  value.push(matrix[0], matrix[1].reverse()); 

  if (matrix[2]) value.push(matrix[2]); 

  if (matrix[3]) value.push(matrix[3].reverse());

  return value.flat();

}
