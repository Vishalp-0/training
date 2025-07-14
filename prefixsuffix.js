function changePrefixorsuffix (name, initial, type) {
    if(type === "prefix") {
        return initial.charAt(0).toUpperCase() + initial.slice(1).toLowerCase() + " " + name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
    }

    if (type ==="suffix"){
        return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase() + " " + initial.charAt(0).toUpperCase() + initial.slice(1).toLowerCase();
    
    }
}


console.log(changePrefixorsuffix("arun", "mr","prefix"));
console.log(changePrefixorsuffix("arun", "jr","suffix"));
