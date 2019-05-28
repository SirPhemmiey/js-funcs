//code to check if the strings are anagrams of each other.

function isAnagram(strA, strB) {
  const sanitizeString = function(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return sanitizeString(strA) == sanitizeString(strB);
}

console.log(isAnagram("femi", "emif"));
