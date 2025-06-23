// Immediately Incoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti hai kyi bar too usko htane ke liye iife ka use hota hai

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();
// to end a code here use ; //important
// its just like () means function () to execute ()()like we do with Chai()

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('kangan')