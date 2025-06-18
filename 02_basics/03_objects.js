// singleton
// Object.create


// object literal

const mySym =Symbol("key1")


const JsUSer = {
    name: "Kangan",  //behind the scene name is consider as string
    "full name": "Kangan Sharma",
    // to use symbol in object (interview question) then it refers to symbol
    [mySym]: "mykey1",
    age: 18,
    location: "Punjab",
    email: "kangan@microsoft.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday","Saturday"]
}

// console.log(JsUSer.email)
// console.log(JsUSer["email"]) //always use this notation to access info
// console.log(JsUSer.full name) not possible
// console.log(JsUSer["full name"]) 
// console.log(JsUSer[mySym])
// how to change value
JsUSer.email = "kangan@chatgpt.com"
// to lock/freeze a value so that others are not able to change it
// Object.freeze(JsUSer)
JsUSer.email = "kangan@google.com"  //this value is not propogated
// console.log(JsUSer["email"]) 
// console.log(JsUSer)

JsUSer.greeting = function(){
    console.log("Hello Js USer")
}
JsUSer.greetingTwo = function(){
    console.log(`Hello Js USer, ${this.name}`)
}

console.log(JsUSer.greeting())
console.log(JsUSer.greetingTwo())