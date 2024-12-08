const sumNumbersBetweenMinMax = (arr)=>{
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    arr.forEach((item)=>{
        if(item < min) min = item;
        if(item > max) max = item;
    });
    for (let num = min; num <= max; num++) {
        sum += num;
    }
    return sum;
}

sumNumbersBetweenMinMax([2,5,6,7,9,10,11,15]);