// Primitive Data Types 

//The primitve DataTypes are know as call by values, because the original data of memeory which is not given, it was copy and gives to you, so any changes is there it was change in a copy 

//There are a 7 Types of Data types 

//7 types : String , Number, Boolean , null , undefined,Symbol,BigInt

//null -> it is empty no values is present
//undefined -> don't know which values will came  
//Symbol -> If we want to make a unqiue element, so we use symbol
//BigInt -> If you want to use very big scientific number so we use the BigInt

//Reference (Non primitive)
// Which drictly allocate a memory into a reference

//There are 3 types : 
//Array, Objects, Functions

const heros = ["Raj", "Shyam", "Doga"]; //we declare the arrays

let myObj = { // we declare the object
    name : "hitesh",
    age : 22,
}

const myFunction = function(){ //in they we delcare over function and we also store it as a function 
    console.log("Hello World");
    
}




//=============================================================

//Important : JavaScript is Dynamic Types Language or static Types languages 
// In dynamic typing , you don't need to declare a variable's types. the type is determined at runtime, bases on the values assigned 
/*
let x = 10; //x is a number
x = "hello";  //x is a String
x = true; // x is true
console.log(x); //output true

const score = 100;
const scoreValues = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
*/

//If we want to declare the symbol;
//let say id because id has unquie 

const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id == anotherid); //output is false 

const biNumber = 934858493023449n //it will automatically convert into a bigInt whien you wirte a n 





