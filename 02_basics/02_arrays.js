const marvel_heroes= ["thor","Ironman","spiderman"];
const dc_heroes= ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// USE spread operator instead of push and concat
// spread operator it makes every value in array separate
const all_new_heroes= [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity)
// console.log(real_another_array);


// used while doing data scrapping
// checking is kangan is an array
// console.log(Array.isArray("Kangan"))
// making array from kangan
// console.log(Array.from("Kangan"))
// console.log(Array.from({name: "Kangan"})) //interesting case for interviews i.e i have to specify kiska array bnana hai

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))