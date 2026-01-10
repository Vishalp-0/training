function sumofevennumbers(array) {
    let output = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            output = output + array[i];
        }
    }

    return output;
}

console.log(sumofevennumbers([38, 3, 2, 8, 31]));
