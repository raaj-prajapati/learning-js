// Primitive Data Types 

//The primitve DataTypes are know as call by values, because the original data of memeory which is not given, it was copy and gives to you, so any changes is there it was change in a copy 

//There are a 7 Types of Data types 

//7 types : String , Number, Boolean , null , undefined,Symbol,BigInt

//null -> it is empty no values is present
//undefined -> don't know which values will came  
//Symbol -> If we want to make a unqiue element, so we use symbol
//BigInt -> If you want to use very big scientific number so we use the BigInt


//=============================================================
/*

//Important : JavaScript is Dynamic Types Language or static Types languages 
// In dynamic typing , you don't need to declare a variable's types. the type is determined at runtime, bases on the values assigned 

let x = 10; //x is a number
x = "hello";  //x is a String
x = true; // x is true
console.log( x); //output true

const score = 100;
//console.log(typeof score); //output --> number

const scoreValues = 100.3;
//console.log(typeof scoreValues); //output --> number


const isLoggedIn = false; //output --> datatype is boolean
const outsideTemp = null; //output --> datatype is object
let userEmail;  
console.log(typeof userEmail); //output ---> datatypes is undefined




//If we want to declare the symbol;
//let say id because id has unquie 

const id = Symbol('123'); 
const anotherid = Symbol('123'); //we are give the same values but return values is not same 
console.log(typeof anotherid); //output ---> datatypes is Symbol



console.log(id == anotherid); //output is false 

//const biNumber = 934858493023449n //it will automatically convert into a bigInt whien you wirte a n 







//Reference (Non primitive)
// Which drictly allocate a memory into a reference

//There are 3 types : 
//Array, Objects, Functions

const heros = ["Raj", "Shyam", "Doga"]; //we declare the arrays
console.log(typeof heros); //output -->  datatypes of heros is --> object

let myObj = { // we declare the object like that 
    name : "hitesh",
    age : 22,
}
console.log(typeof myObj);

const myFunction = function(){ //in they we delcare over function and we also store it as a function 
    console.log("Hello World");

}
console.log(typeof outsideTemp); //ouput --> is object bacause it was unquie and null asign to object
console.log(typeof scoreValues); //output --> is number bacuses we put a some number on our datatypes 
console.log(myFunction); //it will return a function and there return type was object 

//The all non-primative datatypes actully consider as  function 
//fuction which is return a always that is object 

//This is a Reference you can checkout the link
// https://262.ecma-international.org/5.1/#sec-11.4.3


*/



//==========================================================

//Stack --> In Stack all the Primitive datatypes are stored,
//when the Stack memeory is used so we get a Copy of the varaible which we declared 


//Heap --> All the Non - prmitive data types are stored in the Heaps which are Object so we get the reference of orginal values

//=========== CASE - 1 ==========
/*
let myYoutubename = "hiteshRajBhai"; //this is primitive datatypes so it will store in stack 

let anothername = myYoutubename;
console.log(anothername);
*/
//========== CASE -2 ===========

let myYoutubename = "hiteshRajBhai";
let anothername = myYoutubename; // here you are passing the reference of myYoutubename in anothername 

anothername = "ChaiAurCode"; //here you are declaring the another name was with new string 
//now what happening is in anothername was passing a reference of myyoutube and in anothername we declare the new String as chaiAurCode so it make a Copy in stack of myYoutube so orignal values are save 
console.log(anothername);

//============Taking about the Heap Section =============
//in heap it was strore non primitive data types 

let userone = {
    email : "user@google.com",
    upi : "user@ybl"

}
//the email and upi are go on a heap section sections and in stack it store the user , the userone got the references throung heap section where email abd upi are strore 

let usertwo = userone; //so same usertwo also getting the refernces for heap section both are geeting same reference

usertwo.email = "hitesh@google"; //we change the email for usertwo;
console.log(userone.email); //output --> hitesh@google 
console.log(usertwo.email); // output --> hitesh@google
//beacuse it drictly change the orginal values through reference 











