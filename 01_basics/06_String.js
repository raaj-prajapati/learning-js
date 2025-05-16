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

const gameName = new String('RajC-prapati');
console.log(gameName[0]); //output : R

console.log(gameName.__proto__); //we are getting a empty object. but behind the prototype there was different differnt method are persent like, uppercase(), lowercase(), trim, toString() 

console.log(gameName.length); //length of string is four
console.log(gameName.toUpperCase()); //it can't change your original String. 

console.log(gameName.charAt(2)); //2 position which charector is present 

console.log(gameName.indexOf('j')); //the j is which postion it will present ouptput : 2

const newString = gameName.substring(0, 5); 
console.log(newString); // last character of 5 it's not include in substring we can't give the negative values

const anotherString = gameName.slice(-12, 4);
console.log(anotherString); //when you provide a negative values in String in slice method so it will start at the ending of the length and iterator throung starting of the length

// trim
 const newStringOne = "  hitest   ";
console.log(newStringOne);
console.log(newStringOne.trim()); //trime() was remove the Spaces 

//Replace;

const url = "https://rajprajapti.com/raj%20nova";
console.log(url);
console.log(url.replace('%20', '-'));

//include : 

//the include method search the if values is present or not and giving the answer into a boolean way;

console.log(url.includes('sunders')); //false
console.log(url.includes('raj')); //true

//split

console.log(gameName.split('-')); //I slpit the String based on - 
























