function sumofcommaseperatedstring(string) {
    let output = 0;
    let num = "";

    for (let i = 0; i <= string.length; i++) {
        if (string[i] !== "," && i !== string.length) {
            num += string[i];
        } else {
            output += +num;
            num = "";
        }
    }

    return output;
}

console.log(sumofcommaseperatedstring("1.5, 2, 44, 66, 12, 90")); 
