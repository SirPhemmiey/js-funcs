//code to check if the strings are anagrams of each other.

//using direct comparison
// function isAnagram(strA, strB) {
//   const sanitizeString = function(str) {
//     return str
//       .toLowerCase()
//       .replace(/[^a-z\d]/g, "")
//       .split("")
//       .sort()
//       .join("");
//   };
//   return sanitizeString(strA) == sanitizeString(strB);
// }

//using character map
function isAnagram(strA, strB) {
  function createCharMap(text) {
    let charMap = {};
    for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    return charMap;
  }

  if (strA.length === strB.length) {
    let stringAMap = createCharMap(strA);
    let stringBMap = createCharMap(strB);
    for (let char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        return false;
      }
      return true;
    }
  } else {
    return false;
  }
}

console.log(isAnagram("femi", "emia"));
