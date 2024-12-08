const thirdLargest = (arr) => {
  let first = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    arr[i] > first && (first = arr[i]);
  }
  let second = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= arr.length; i++) {
    arr[i] > second && arr[i] < first && (second = arr[i]);
  }
  let third = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= arr.length; i++) {
    arr[i] > third && arr[i] < second && (third = arr[i]);
  }
  return third;
};

console.log(thirdLargest([12, 13, 1, 10, 34, 16]));
