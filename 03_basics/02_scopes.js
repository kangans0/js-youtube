let k= 500; //global scope

 
if (true){
    // local scope
    let k=30;
    // console.log("Inner: ",k);
    let a= 10
    const b=20
    var c= 30
    // var type can be accessed outside the scope which is not good that is why we dont use var (drawback)
}
// {} is called scopes
// console.log(k);
// How to use scope in window
// scope in browser (console) and scope in coding environment (VS Code) are DIFFERENT

// nested scope
function one(){
    const username="kangan"

    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website);

    two()
}
one()

// ++++++++++++++++++++  INTERESTING +++++++++++++++++++++
// will not give error
console.log(addone(5))
function addone(num){
    return num+1
}

addTwo(5)             //will give error becoz here we declared function and we holded it in variable
const addTwo = function(num){
    return num+2
}
// addTwo(5)
