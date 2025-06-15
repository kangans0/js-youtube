const name= "kangan"
const repoCount =50
// old way and not a good way
// console.log(name + repoCount+ " Value")
// new way and a good practice
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName =new String('Kangani-ks')
// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

// learn all methods from console of browser

const newString =gameName.substring(0,4)
console.log(newString)

const anotherString =gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "    kang    "
console.log(newStringOne)
console.log(newStringOne.trim())
const url = "https://www.you%20tube.com/"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))