function InterChangingInArray (array1, index) {
    let  array2 = index -1;

    if (array2 === array1.length -1){
        let temp = array1[0];
        array1[0]= array1[array2];
        array1[array2]= temp;           
    }
    
    else if (array2 >= 0 && array2 < array1.length - 1) {
        let temp = array1[array2];
        array1[array2] = array1[array2 + 1];
        array1[array2 + 1] = temp;
    }

    return array1;
}

