function reverseInt(n) {
  const rev = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return Math.sign(n) * parseInt(rev);
}
console.log(reverseInt(20));
