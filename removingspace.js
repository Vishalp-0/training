function removingSpace (str) {
    let result = " ";

    for (let i =0; i<str.length; i++) {
        if (str[i] !==" ") {
            result= result +str[i];
        }
    }
    return result;
}

console.log(removingSpace("v iadhw njb whB CUABAKN C"))