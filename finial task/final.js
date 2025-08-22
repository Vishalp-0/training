//importing the given data
const data = require ('C:/Users/v-vivenkatac/Desktop/javascript/finial task/users-db.json');
// console.log("loaded data:", data);

//1. Find the country which has the highest income.
function findinghighestincome(users){
    let income = Math.max (...users.map(users => users.income));

    for (let i = 0; i< users.length; i++){
        if (users[i].income === income){
            return users[i].country;
        }
    }
} 
// console.log(findinghighestincome(data));

//2.Find the country which has the combined highest income.

function totalincomeofeachcountry(users){
    let incomeofcountries = {};

    for (let i = 0; i < users.length; i++){
        let country = users[i].country;
        let income = users[i].income;

        incomeofcountries[country] = (incomeofcountries[country] || 0) + income;
    }

    let topcountry = {};
    let topincome = 0;

    for (let country in incomeofcountries){
        if (incomeofcountries[country] > topincome) {
            topincome = incomeofcountries[country];
            topcountry = country;
        }
        return topcountry;

    }
    
}
// console.log(totalincomeofeachcountry(data));


// 3. the users whose email ends with .gov (return complete user info

function usersendwithgov(users){
    let a = [];

    for(let i = 0; i< users.length; i++){
        let gov = users[i].email.substring(users[i].email.length - 4);
        if (gov === ".gov"){
            a.push(users[i]);
        }
    }
    return a;

}

// console.log(usersendwithgov(data))


// 4.the country name which has the maximum combined income for Female users.

function totalincomeoffemale(users){
    let incomeoffemales = {};

    for (let i=0; i<users.length; i++){
        let user = users[i];
    
    if (user.gender === "Female"){
        let country = user.country;
        incomeoffemales[country] = (incomeoffemales[country] || 0) + user.income
    }
    
}

    let topcountry = {};
    let topincome = 0;

    for (let country in incomeoffemales){
        if (incomeoffemales[country] > topincome) {
            topincome = incomeoffemales[country];
            topcountry = country;
        }

    }
    return topcountry;

}
console.log(totalincomeoffemale(data));
