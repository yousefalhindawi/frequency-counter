/*
write a function called sumZero which accepts a sorted array of integers, the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist
eg. sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
*/

/*
Naive Approach
const sumZero = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }        
    }
}

*/
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
//   while (left < right) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
};
