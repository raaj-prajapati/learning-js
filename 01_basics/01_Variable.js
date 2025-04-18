const accountId = 1234; //memory name accountid = values we can asign is 1234;
let accountEmail = "raj@google,com";
var accountPassword = "1234";
accountCity = "Jaipur";

// accountId = 2; //it will give an error because when we write a const keyword os we can't change it;  
accountEmail = "harsh@gmail.com";
accountPassword = "212121";
accountCity = "Bangaluru";   //in this way varible we delare a variable always but it is a wrong ways --> perfer it not to use

let accountState; //the values we can't defined so it will consider as undifiend values

/*
Prefer not to use var
becausee of issue in block scope and funnctional scope
*/

console.log(accountId);  
console.table([accountId, accountEmail,accountPassword,accountCity, accountState])

//what is the different between let and var;
//Var keyword has function level of scop and let and const has block level scope


