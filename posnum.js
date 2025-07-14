let array1 = [-1,-2,-3,1,2,3]
let array2 = []
let value = 0

for (let i = 0; i<array1.length; i++){
    value = array1[i]
    if (value <0)
        continue

    array2.push(value);
}

console.log(array2);
