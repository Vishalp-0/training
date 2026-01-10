function  replaceNumbers (input,letter){
    let output = " ";

    for (let i =0; i< input.length; i++){
        let char = input[i];

        if (char >="0"  &&  char<= "9"){
            output = output + letter;
            console.log(i,output,letter);
        }

        else{
            output = output + char;
            console.log(i,output,char);
        }
    }
    return output;
}

console.log(replaceNumbers("arun@123","d"));