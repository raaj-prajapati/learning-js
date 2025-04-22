// console.log(2 > 1); //It will give us true or false 
// console.log(2>=1); //It will give true or false 
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/*
console.log("2" > 1); //so it will covert the string into a number so it will give a (true)-> answer 
console.log("02" > 1);
*/

//Null Operators
console.log(null > 0);//output = false
console.log(null == 0);//output = false
console.log(null >= 0);//output = true 
//now how >= get us true why == and > let see it
/*
The reason is that an equality check == and comparisions which are > < , >= <= work differently

Comparisons convert null to a nummber, treating it a 0.
That's why(3) null >=0 is true and (1) null > 0 is false.
 in case 3 the null convert into a 0 
*/


//Undifiend Operations
console.log(undefined == 0); //output = false
console.log(undefined > 0); //output = false
console.log(undefined < 0); //output = false

//== and > < both are having the defined interanlly implementation


//===
console.log("2" == 2);
//Now ===(triple equal to check not only number it's check there datatypes also)










