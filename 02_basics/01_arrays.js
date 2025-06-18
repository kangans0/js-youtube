// Array

const myArr= [0,1,2,3,4,5]
// console.log(myArr[0]);

// Shallow copy of an object is a copy whose properties share the same references as those of source object
// Deep copy of an object is a copy whose properties do not share the same references
 const myHeroes=["shaktiman","naagraj"]
 const myArr2 = new Array(1,2,3,4,5)

// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9) //not a good practise
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr =myArr.join()
// console.log(myArr)
// console.log(typeof newArr) //string 

// slice, splice

console.log("A",myArr);

const myn1 =myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 =myArr.splice(1,3); //manipulates array
console.log("C ",myArr)
console.log(myn2);
