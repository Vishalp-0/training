function sumofmultiple (num, multiple) {
    let output = 0;
    for (let i = 1; i<= multiple; i++) {
        output = output + (num * i);
    }
    return output;
}


console.log(sumofmultiple(5,5));
console.log(sumofmultiple(8,3));
