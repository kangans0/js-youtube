const score=400
// console.log(score)
const balance= new Number(100)
// console.log(balance)

// learn all methods from console of browser

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  //used when making e-commerce websites

const otherNum= 23.8088;
// console.log(otherNum.toPrecision(3))
const otherNum1= 123.8088;
// console.log(otherNum1.toPrecision(3))
const otherNum2= 1234.8088;
// console.log(otherNum2.toPrecision(3))

const hundreds= 1000000
// console.log(hundreds.toLocaleString('en-IN'))
// MIN_VALUE,MAX_VALUE

// ***********************Maths**************************
// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.34));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,8,2,5,1));
// console.log(Math.max(4,8,2,5,1));

// // Most used
// console.log(Math.random())
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random()*10) + 1)

const min= 10
const max =20
// ********Important formula ************
// when i want random alue between specific range
console.log(Math.floor(Math.random() * (max-min + 1)) + min)