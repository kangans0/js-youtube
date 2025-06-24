const coding= ["js","py","ruby","java","cpp"]

// 1st way

// callback function ka name nhi hota
// coding.forEach( function (item){
//     console.log(item);
// })

// 2nd way

// coding.forEach( (item) => {
//     console.log(item)
// })

// 3rd way

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding =[
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "javascipt",
        languageFileName:"js"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})