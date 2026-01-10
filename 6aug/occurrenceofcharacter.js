function occurrenceofcharacter(input) {
    let output = " ";

    for (let i = 0; i < input.length; i++) {
        if (input [i] === 'c') {
            output += 'c@';
        } 
        else {
            output += input[i];
        }
    }

    return output;
}

console.log(occurrenceofcharacter("cat in the bag"));
console.log(occurrenceofcharacter("cat in c the bag"));
