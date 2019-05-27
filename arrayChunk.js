//code to split an array into chunks (sub array)

//using array looping
// function split(array, size) {
//   let result = [];
//   for (let value of array) {
//     let remainingArray = result[result.length - 1];
//     if (!remainingArray || remainingArray.length == size) {
//       result.push([value]);
//     } else {
//       remainingArray.push(value);
//     }
//   }
//   return result;
// }

//using splice function
// function split(array, size) {
//   let result = [];
//   let arrayCopy = [...array];
//   while (arrayCopy.length > 0) {
//     result.push(arrayCopy.splice(0, size));
//   }
//   return result;
// }

//using slice function
// function split(array, size) {
//   let result = [];
//   for (let i = 0; i < array.length; i += size) {
//     let chunk = array.slice(i, i + size);
//     result.push(chunk);
//   }
//   return result;
// }

//using recursion
function split(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...split(array.slice(size), size)];
}

console.log(split([1, 2, 3, 4, 5], 2));
