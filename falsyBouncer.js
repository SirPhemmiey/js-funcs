//code to remove every falsy element from within an array.

//usinf for..of
// function falsyBouncer(array) {
//   let result = [];
//   for (let value of array) {
//     if (Boolean(value)) {
//       result.push(value);
//     } else {
//       result;
//     }
//   }
//   return result;
// }

//using filter()
// function falsyBouncer(array) {
//   const result = array.filter(value => {
//     return Boolean(value);
//   });
//   return result;
// }

//using another filter() method
function falsyBouncer(array) {
  return array.filter(Boolean);
}

console.log(falsyBouncer([1, 0, null, "", 5, 10, 4, NaN]));
