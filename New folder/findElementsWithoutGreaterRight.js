/*
- given an array, return an array for the elements that doesn't have greater elements in the right side of them.. 
EX: [2,8,5,4] => [8,5,4]
*/
const greaterRightSide = (arr) => {
  const res = [];
  arr.forEach((item, index, array) => {
    if (item > array[index + 1]) {
      res.push(item);
    }
  });
  res.push(arr[arr.length - 1]);

  return res;
};

console.log(greaterRightSide([2, 8, 5, 5, 4, 6, 3, 1, 10]));
