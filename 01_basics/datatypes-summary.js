// Primitive datatypes (give copy of data)
// 7 types : String(they are call by value),Number, Boolean, null, undefined, Symbol(to make something unique), BigInt

// const score=100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp= null
// let userEmail;    //undefined

// const id=Symbol('123')
// const anotherId = Symbol('123')
// console.log(id==anotherId);


// Javascript is a dynamically typed language. This means that the type of a variable is checked during runtime, not during compile time.

// Reference (Non primitive) datatype (gives reference of data)
// Array, Objects, Functions 

// const heros= ["shaktiman","naagraj","bheem"]
// let myObj = {
//     name: "kangan",
//     age: 20
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);
// console.log(typeof outsideTemp);
// console.log(typeof myFunction);

// ******************************************************************

// Stack (Prmintive), Heap (Non-Primitve)

let youtube="kangan Sharma"
let newYoutube=youtube  //In Stack it get copy of variable
newYoutube= "Kartik Sharma"
console.log(youtube)
console.log(newYoutube)

let userOne ={
    email: "heello@gmail.com",
    upi: "userOne@ybl"
}
let userTwo=userOne // In heap it get same reference of variable
 userTwo.email= "kangan@gmail.com"
 console.log(userOne.email)
 console.log(userTwo.email)