let userEmail ="kangan@.ai"
// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Dont have uer email");
// }

// falsey values
// false , 0, -0, bigInt 0n, "", null, undefined, Nan(not a number)

// truthy values
// "0", "false", " ", [], {}, function(){}(empty function)

// to check if array/ object is empty as empty/object array also give truthy value
userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}
// important from interview precpective
// false == 0 => true
// false == '' =>true
// 0 == '' =>true

// IMPORTANT
// Nullish Coalescing Operator (??): used for null, undefined values

let val1;
val1= 5 ?? 10
val1 = null ?? 10
val1= null ?? undefined
val1 = null ?? 10 ?? 20
console.log(val1)

// Terniary Operator
// condition ? true: false
