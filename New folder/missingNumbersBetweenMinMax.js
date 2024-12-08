// Find all the missing numbers between the min and the max number in this array

const missingNumbersBetweenMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let res = [];
  arr.forEach((item) => {
    if (item < min) min = item;
    if (item > max) max = item;
  });
  for (let num = min; num <= max; num++) {
    if (!arr.includes(num)) res.push(num);
  }
  return res;
};
missingNumbersBetweenMinMax([0, 5, 4, 9, 3]);
