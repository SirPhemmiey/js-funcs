//code to count the vowels in a string or text

//Using interation
// function vowelsCount(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let val of str.toLowerCase()) {
//     if (vowels.includes(val)) {
//       count++;
//     }
//   }
//   return count;
// }

//using RegEx
function vowelsCount(str) {
  let matchInstances = str.match(/[aeiou]/gi);
  if (matchInstances) {
    return matchInstances.length;
  } else {
    return 0;
  }
}

console.log(vowelsCount("FEMI"));
