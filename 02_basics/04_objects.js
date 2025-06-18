// const tinderUser = new Object() //Singleton Object
const tinderUser ={} //Non- Singleton Object

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kangan",
            lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}

// const obj3 ={obj1, obj2} //this will create new object which we dont want we want to merge it
// const obj3 =Object.assign({},obj1,obj2)
// {} this act as a target and rest other act as a source

const obj3 ={...obj1,...obj2} //this will be used 90% of time same as array
// console.log(obj3);

const users =[
{
    id: 1,
    email: "kangan@google.com"
},
{
    id: 1,
    email: "kangan@google.com"
},{
    id: 1,
    email: "kangan@google.com"
}
]

// users[1].email
// console.log(tinderUser)
// // important
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// // to check if it include any this named property
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// To check more properties go on console make a object and check

// *********************OBJECT de-structure and JSON API*******************
// JSON full form is JavaScript Object Notation
const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor OR use const {courseInstructor}= course
//  const {courseInstructor: instructor}= course
// console.log(instructor)

// {
//     "name": "Kangan",
//     "coursename": "js in hindi",
//     "price" ="free"
// }