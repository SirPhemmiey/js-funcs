function isPalindrome(str) {
    str = str.replace(/s/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}