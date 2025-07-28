function findCommon (array1,array2) {
    let commonnumber =[];

    for (let i = 0; i< array1.length; i++) {
        for (let j = 0; j< array2.length; j++) {
        if (array1[i] === array2[j]) {
        commonnumber.push(array1[i])
        }
        }
        
    }
    return commonnumber;
}


console.log(findCommon([1,2,3,12,23,45],[1,3,4,12,34,56]));

