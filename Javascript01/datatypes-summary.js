

/*
Primitive datatypes
String, Number, Boolean, null, undefined, symbol, BigInt

Non-primitive datatypes (Reference)
Array, Object, Functions
*/

// primitive datatypes

let userName = "sajjad"
const score = 100
const scoreValue = 100.5
const isLoggedIn = true
const outSideTemp = null
let userEmail;

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//bigInt
const bigNumber = 345335436346457457577457n


// Non primitive datatypes

//array
const heros = ["Sajjad", "Junaid", "Saad"]

//object
 let myObj ={
    name: "sajjad",
    score: 100
 }

 //function
 let myfunction = function(){
    console.log("Hello sajjad");

 }

 console.log(typeof bigNumber);
 console.log(typeof myfunction);
 console.log(typeof myObj);
 console.log(typeof heros);
 console.log(typeof Symbol);
 
 
 
 
 
