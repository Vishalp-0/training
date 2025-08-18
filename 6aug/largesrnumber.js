function largestnumber(array, n) {
    
    for (let i = 0; i < array.length; i++) {
        let count = 0;

        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                count++;
            }
        }

        if (count == n - 1) {
            return array[i];
        }
    }

}


console.log(largestnumber([3, 4, 5, 6, 88], 2));
