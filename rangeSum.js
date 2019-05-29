//code to calculate range sum in an array

function rangeSum(array) {
  const result = ((array[1] - array[0] + 1) * (array[0] + array[1])) / 2;
  return result;
}

console.log(rangeSum([1, 2]));
