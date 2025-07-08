function findsum(num){
    let sum = 0;
    let str = num.toString();

    for(let i = 0; i<str.length;i++) {
        let char = Number(str[i]);

        if (char >=0 && char <=9){
            sum = sum + char;
    }
       
}
    return sum;
}
console.log(findsum(12345));