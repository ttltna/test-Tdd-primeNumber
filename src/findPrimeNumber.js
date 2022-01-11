export const notPrimeNumber = (num) => {
    if(num < 2) return `${num}는(은) 소수일 수 없습니다.`;
    else        return `${num}는(은) 소수일 수 있습니다.`;
}

export const checkPrimeNumber = (num) => {
    for(let i=2; i<num; i++){
        if(num % i === 0){
            return `${num}는(은) 소수가 아닙니다.`;
        }
    }
    return `${num}는(은) 소수입니다.`;
}

export const countPrimeNumber = (num) => {
    let count = 0;
    for(let i=2; i<=num; i++){
        let primeNumber = true;
        for(let j=2; j<i; j++){
            if(i % j === 0){
                primeNumber = false;
            }
        }
        if(primeNumber === true){
            count++;
        }
    }
    return count;
}

// 1. num이 2이상일때 처리 2이상만 소수를 구할수 있다.
// 2. 소수를 구하는 함수
// 3. 사이에 소수가 몇개인지