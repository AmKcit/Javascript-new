const accountId = 14453
let accountEmail= "amitkc@gmail.com"
var accountPassword="12345"
accountCity= "pokhara"
let accountState;

// accountId= 2

/*
 prefer not to use "var" because of issue in block scope and functional scope.
*/

accountEmail="hc@email.com"
accountPassword="2121"
accountCity="ktm"

console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])