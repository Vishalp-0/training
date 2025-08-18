function numberofpairs (array, sum) {
    let output = 0;
     
    for (let i = 0; i< array.length; i++) {
        for (let j = i +1; j < array.length; j++){
            if (array[i] + array[j] === sum) {
                output++;
            }
        }
    }

    return output;
}

console.log(numberofpairs( [4, 2, 5, 6, 8, 1],6))