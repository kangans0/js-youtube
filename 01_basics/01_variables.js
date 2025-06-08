const accountId= 14453
let accountEmail = "kangan@gmail.com"
var accountPassword = "12345"
accountCity ="Jaipur"  //not a good practise to assign without keyword
// accountId=2 //not allowed
let accountState;
console.log(accountId)
accountEmail="hc@hc.com"
accountPassword="12321"
accountCity="Benguluru"
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use 'var' keyboard
because of issue in block scope and functional scope
*/