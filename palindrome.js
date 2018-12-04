//returns true if a word, phrase, or sequence that reads the same backwards as forwards
function isPalindrome(str) {
    str = str.replace(/s/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}