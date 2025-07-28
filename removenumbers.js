function  replaceNumbers (input,letter){
    let result = " ";

    for (let i =0; i< input.length; i++){
        let char = input[i];

        if (char >="0"  &&  char<= "9"){
            result = result + letter;
            console.log(i,result,letter);
        }

        else{
            result = result + char;
            console.log(i,result,char);
        }
    }
    return result;
}

console.log(replaceNumbers("arun@123","d"));