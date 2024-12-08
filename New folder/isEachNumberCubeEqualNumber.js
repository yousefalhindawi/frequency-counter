// Check if the the cube of each number in a given is the same to that number for
// example: Input = 153, 1^3 + 5^3 + 3^3 = 153 Output = true

const isEachNumberCubeEqualNumber = (num)=>{
    let numArr = num.toString().split("");
    let sum = 0;
    numArr.forEach((item)=>{
        sum += item*item*item;
    });
    if(sum === num) return true;
    return false;
};

isEachNumberCubeEqualNumber(153);
