/*
let score = 33; //we don't know it is numbers or String, we can tell that it is a number we see it, suppose a person whose work as forentend developer and there was one file which is sended to you and you does't know 

//the score datatypes we don't know it is a number or string.

//how we can check it, it is number or string.
console.log(typeof score); //output -> number 

//====================== CASE 2 =============================

let score1 = "33"; //if values came in a String, and you know you want to do a operations on number 
console.log(typeof score1); //output as String, now i want to convert into a number so we do 

let valueInNumber = Number(score1) //Now this Score1 convert into a number  //and in same methods you can convert into a String also
console.log(typeof valueInNumber); //output -> number

//================ CASE 3 ======================

let score2 = "33abc" //there was alphabet also and number also 
console.log(typeof score2);
let valueInNum = Number(score2);
console.log(typeof valueInNum);// it will covert into a number 
 
console.log(valueInNum); //Output -> NaN, now our 33 is not a pure number beacuse there was some alphabet also present 

//==================== CASE 4 ====================
let score3 = null;
console.log(typeof score3);

let valueInNumm = Number(score3)
console.log(valueInNumm); //output -> 0


//==================== CASE 5 ====================

let score4 = undefined;
console.log(typeof score4);

let valueInNumm1 = Number(score4)
console.log(valueInNumm1); //output -> Nan


//================ CASE 6 =====================

let score5 = true;

console.log(typeof score5);
let valuesInNum2 = Number(score5)
console.log(valuesInNum2);  //output => 1


//Summary It
//"33" => 33;
//"33abc" => NaN
//true => 1; false => 0;

// This are Some Conversion which we have done 
*/

//=============Boolean CASE 1 ================

/*
let isLoggedIn = 1; 

let booleanIsLogin = Boolean(isLoggedIn) ; //we convert 1 into boolean 

console.log(typeof booleanIsLogin); //boolean type
console.log( booleanIsLogin); // true 1 is true

//=============Boolean CASE 2 ================

let isLoggedIn1 = ""; //we give a empty String 

let booleanIsLogin1 = Boolean(isLoggedIn1) ; //we convert 1 into boolean 

console.log(typeof booleanIsLogin1); //boolean type
console.log( booleanIsLogin1); // empty string gives values as false 

//=============Boolean CASE 3 ================

let isLoggedIn2 = "Raj"; //we give a name in String 

let booleanIsLogin2 = Boolean(isLoggedIn2) ; //we convert 1 into boolean 

console.log(typeof booleanIsLogin2); //boolean type
console.log( booleanIsLogin2); // give me a True

//1 => true; 0 => false;
//"" => false;
//"hitesh" => true;
*/

//================ String CASE 1 ==================

let SomeNumber = 33;

let valueString = String(SomeNumber);
console.log(valueString);
console.log(typeof valueString); //it is convert into a String 


















