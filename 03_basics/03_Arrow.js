// const user={
//     username: "Kartik",
//     price: 999,
    
//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`); //this keyword is used to refer to current context

//         console.log(this);
//     }
// }
// arrow function mein THIS keyword nhi use hota

// user.welcomeMessage()
// user.username="Kangan"
// user.welcomeMessage()

// in empty environment node refers to empty object
// but in browser the global object is window 
// console.log(this);

// function chai(){
//     let username= "kangan"
//     // console.log(this);
//     console.log(this.username); // undefined//this work in object not in function
// }
// chai()

//ARROW FUNCTION

// const chai = () => {
//     let username= "kangan"
//     console.log(this); 
// }
// chai()

// const addTwo= (num1,num2) => num1+num2  //Implicit return

//very helpful in react
// const addTwo= (num1,num2) => (num1+num2)

// const addTwo= (num1,num2) => (num1+num2)

const addTwo=(num1,num2) => ({username: "Kangan"})  //have to add object in parenthesis() and curly{} braces

console.log(addTwo(3,4))

const myArray=[2,3,4,5,6]
// myArray.forEach()
