//code to return the most common word

function mostCommonWord(string) {
  let wordCounter = {};
  let mostCommonWord = "";
  let mostCommonWordCounter = 0;

  string.split(" ").forEach(word => {
    wordCounter[word] = wordCounter[word] || 0;
    wordCounter[word]++;
  });

  for (let word in wordCounter) {
    if (wordCounter[word] > mostCommonWordCounter) {
      mostCommonWordCounter = wordCounter[word];
      mostCommonWord = word;
    }
  }
  return mostCommonWord;
}

console.log(mostCommonWord("I am femi and going going going to eat"));
