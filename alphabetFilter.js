//code to filter out consonants and vowels in a string

let vowels = ['a', 'e', 'i', 'o', 'u'];

function filterVowels(str) {
    let result = str.split('');
    let answer = result.filter(e => {
        let vowels = "aeiouAEIOU";
        let nonVowels = vowels.indexOf(e);
        return nonVowels == -1;
    });

    return answer.join('');
}

function filterConsonants(str) {
    let result = str.split('');
    let answer = result.filter(e => {
        let vowels = "aeiouAEIOU";
        let nonVowels = vowels.indexOf(e);
        return nonVowels != -1;
    });
    return answer.join('');
}

// console.log(filterVowels('hackerank'))
console.log(filterConsonants('femi'))