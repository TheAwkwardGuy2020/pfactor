function pFactor(number){
    let factors = [];
    let num = number;
    for(let i = 2; i <= number/2; i++){
        if(num % i === 0){
            num = num / i;
            factors.push(i);
            i=1;
        }
    }
    return factors;
}
module.exports = pFactor;
