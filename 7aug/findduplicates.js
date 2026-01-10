function findduplicates (input) {
    let duplicates = [ ];
    input.sort();

    for (let i=0; i < input.length - 1; i++) {
        if (input[i] === input[i + 1]) {

            if (duplicates.length === 0 || duplicates[duplicates.length -1 !== input[i]]) {
                duplicates.push(input[i]);
            }

        }
    }
    return duplicates;
}

console.log(findduplicates([1, 2, 3, 4, 5, 3, 6]));