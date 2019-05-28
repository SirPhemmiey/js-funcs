function maxRecurring(str) {
  let charMap = {};
  let maxChar = "";
  let maxValue = 0;
  for (let char of str) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxValue) {
      maxValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxRecurring("aabacada"));
