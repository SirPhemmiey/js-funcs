//code to search and replace a str

function searchReplace(text, searchValue, replaceValue) {
  if (searchValue[0] === searchValue[0].toUpperCase()) {
    replaceValue = replaceValue[0].toUpperCase() + replaceValue.slice(1);
  }
  return text.replace(searchValue, replaceValue);
}
console.log(searchReplace("I am FEMI", "FEMI", "AKINDE"));
