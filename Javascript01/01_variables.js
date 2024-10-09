const accountId = 12345
let accountEmail = "sajjad@google.com"
var accountPassword = "123"
accountCity = "Bangalore"

//accountId = 123  // We cannot change the const keyword values once it is defined.
accountEmail = "ms@google.com"
accountPassword = "abc"
accountCity = "jaipur"
accountState ="";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//prefer not to use var variable, bcoz of issues in block scope and function scope
