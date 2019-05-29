//code to return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted

//using a for loop to get the immediate position
// function whereIBelong(array, num) {
//   array.sort((a, b) => {
//     return a - b;
//   });
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= num) {
//       return i;
//     }
//   }
//   return array.length;
// }

//using for loop to count the number of smaller numbers
// function whereIBelong(array, num) {
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (num > array[i]) {
//       counter++;
//     }
//   }
//   return counter;
// }

//using while loop
// function whereIBelong(array, num) {
//   array.sort((a, b) => {
//     return a - b;
//   });
//   let counter = 0;
//   while (array[counter] <= num) {
//     counter++;
//   }
//   return counter;
// }

//find the index directly
function whereIBelong(array, num) {
  array.push(num);
  array.sort((a, b) => a - b);
  return array.lastIndexOf(num);
}

console.log(whereIBelong([1, 2, 3, 4], 2.5));
