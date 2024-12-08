function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

    while (left < right) {
  // for (var i = 0; i < s.length; i++) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// const isPalindrome = (s) => {
//   let letters = [];

//   for (let i = 0; i < s.length; i++) {
//     letters.push(s[i]);
//   }
//   let rs = "";
//   for (let i = 0; i < s.length; i++) {
//     rs += letters.pop();
//   }
//   s === rs ? true : false;
// };
