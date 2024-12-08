function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0) return false; 
    return num > 1;
}

const primeNumbers = (number)=>{
    let primeNumbersArr = [];
    for (let i = 2; i < number; i++) {
        if(isPrime(i)) primeNumbersArr.push(i)
    }
    return primeNumbersArr;
}

primeNumbers(100);