function filterinvaliditems(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        // if (typeof array[i] !== "string") {
        if (typeof array[i] !== "number") {
            result[result.length] = array[i];
        }
    }

    return result;
}


console.log(filterinvaliditems(["a", "d", 1, true, "cd", 33]));