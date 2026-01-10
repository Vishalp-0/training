function sumOftwolargest(array) {
    let largest = " ";
    let second = " ";

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            second = largest;
            largest = array[i];
        } else if (array[i] > second) {
            second = array[i];
        }
    }

    return largest + second;
}

console.log(sumOftwolargest([32, 66, 80, 120, 45]));
