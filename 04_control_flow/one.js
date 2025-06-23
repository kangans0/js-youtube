// if
// const temperature =42;
// if(temperature ===42){
//     console.log("less than 50")
// } else{
//     console.log("temperature is greater than 50")
// }

// <,>,<=,>=,==,!=,===
// === (strict)checks datatype of the value is same or not

// const balance =1000
// // good practise
// if (balance>500) console.log("test"); console.log("test2");

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2==3){
    console.log("Allow to but course");
}
 if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
 }