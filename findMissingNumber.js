//code to find missing number in an array

function findMissingNumber(array, upperBound, lowerBound) {
  let sumOfArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfArray += array[i];
  }

  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound
  let upperLimitSum = (upperBound * (upperBound + 1)) / 2;
  let lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;
  let theoreticalSum = upperLimitSum - lowerLimitSum;
  return theoreticalSum - sumOfArray;
}

console.log(findMissingNumber([1, 3, 4], 4, 1));
