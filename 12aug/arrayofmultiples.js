function arrayofmultiples (array) {
    let output = [];

    for (let i = 1; i <= array[1]; i++) {
        output.push(array[0] * i);
    }
    return output;
}


console.log(arrayofmultiples([2,5]));
