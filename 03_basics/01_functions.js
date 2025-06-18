function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("N");
}
// sayMyName;  //Reference\
// sayMyName();   //execute

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(4,8);

function addTwoNumbers(number1, number2){
    let result = number1+number2;
    return result;
}
const res=addTwoNumbers(6,9);
// console.log(res);

function loginUserMessage(username){
    if(!username){                                   // username===undefined can also be written as !username becoz both return true 
        console.log("Please enter a  username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())  

// ... rest operator
function calculateCartPrice(... num){
    return num
}

// console.log(calculateCartPrice(200,300,400,500))

const user = {
    username: "kangan",
    price: 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

const newArray =[200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray))