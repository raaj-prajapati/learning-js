const name = "Hitesh";
const repoCount = 50;
/*
when we want to concatdenate a two string so we are using it 
console.log(name +  repoCount + " Values is " );

but this is not a good approach for add a word 

Best Appoach do a String interpolation :
we can use a backtick 
let see it :
*/
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//this is mode way to use like a syntax which is know as String interpolation 

// CASE 2 : 
//How to define a String with Object

const gameName = new String('RajC');
console.log(gameName[0]); //output : R

console.log(gameName.__proto__); //we are getting a empty object. but behind the prototype there was different differnt method are persent like, uppercase(), lowercase(), trim, toString() 

console.log(gameName.length); //length of string is four
console.log(gameName.toUpperCase()); //it can't change your original String. 









