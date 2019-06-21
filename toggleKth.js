//code to toggling-k-th-bit-number

// 1) Left shift given number 1 by k-1 to create
// a number that has only set bit as k-th bit.
// temp = 1 << (k-1)
// 2) Return bitwise XOR of temp and n.  Since temp
// has only k-th bit set, doing XOR would toggle
// only this bit.
function toggleKthBit(n, k) {
  return n ^ (1 << (k - 1));
}
console.log(toggleKthBit(5, 1));
