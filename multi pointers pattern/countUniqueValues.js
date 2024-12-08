// const countUniqueValues = (arr) => {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (arr[i] || 0) + 1;
//   }
//   return Object.keys(obj).length;
// };

// console.log(countUniqueValues([1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// const countUniqueValues = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) res.push(arr[i]);
//   }
//   return res.length;
// };
const countUniqueValues = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
console.log(countUniqueValues([1, 1, 1, 1]));
console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
