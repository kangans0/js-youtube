// "Date objects encapsulate an integgral number that represents milliseconds since the midnight at the beginning of January 1,1970,UTC"
// press CTRL+SPACE to see function that can be performed
// let myDate =new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)
// moths start from 0
// let myCreatedDate =new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())
// let myCreatedDate =new Date(2023, 0, 23, 5,3)
// console.log(myCreatedDate.toLocaleString())
// let myCreatedDate =new Date("2023-01-14")
let myCreatedDate =new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp =Date.now()  //interview asked
console.log(myTimeStamp)
// to compare time 
console.log(myCreatedDate.getTime())  
// to convert in seconds
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate.getHours())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})