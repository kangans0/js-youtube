// Promise is OBJECT
// primise apne andr callback leta hai
// const promiseOne= new Promise(function(resolve, reject){
//     // Do an asyn task
//     // DB calls, crypotography,network
//     setTimeout(function(){
//         console.log('Asyn task is complete');
//         resolve()
//     },1000)
// })

// // consumption of promise
// // resolve ka connection hai .then() ke sath
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Asyn 2 resolved")
// })

// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username:"Chai",email:"chai@email.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })

// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error= false;
//         if(!error){
//             resolve({username:"Kangan",password:"123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },2000)
// })

// // 2nd wala used .then() uses the value returned in 1st .then() wala function 
// // and we cannot store promise.then() function in variable
// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=> console.log("the promise is either resolves or rejected"))



// const promiseFive =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error= true;
//         if(!error){
//             resolve({username:"JavaScript",password:"123"})
//         }else{
//             reject('ERROR: Js went wrong')
//         }
//     },1000)
// })
// yeh thodhi der wait krta hai kaam hone ka agr nhi hota hai to vahi prr error de deta hai  aur agge nhi bdhta 
// majorly used in data base
// async function consumePromise(){
//     try {
//         const response=await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise()


// async function getAllUsers() {
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))
