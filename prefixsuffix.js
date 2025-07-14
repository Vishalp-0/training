function changePrefixorsuffix (name, initial, type) {
    if(type === "prefix") {
        return initial + " " + name;
    }

    if (type ==="suffix"){
        return name + " " + initial;
    
    }
}


console.log(changePrefixorsuffix("arun", "mr","prefix"));
console.log(changePrefixorsuffix("arun", "jr","suffix"));
