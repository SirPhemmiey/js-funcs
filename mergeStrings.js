//merges two strings in an ordered manner
function find(a, b) {
    var i,
        l = Math.min(a.length, b.length),
        temp = '';

    for( i = 0; i < l; i++) {
        temp += a[i] + b[i];
    }
    return temp + a.slice(i) + b.slice(i);
}
var a = ['a', 'b', 'c'];
var b = [1, 2, 3,];
console.log(find(a, b));