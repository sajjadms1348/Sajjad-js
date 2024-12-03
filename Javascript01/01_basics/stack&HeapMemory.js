//Primitive tyes => stack memory will get a copy of it.
//Non-primitive => Heap memory will get a reference of original value of it.


//Stack memory
let myName = "sajjad"

let anotherName = myName
anotherName = "Mohammad"


console.log(anotherName);
console.log(myName);


//Heap memory

let userOne = {
    email: "user@google.com",
    upi: "upi@ybl"
}

let userTwo = userOne

userTwo.email = "sajjad@google.com"

console.log(userOne.email);
console.log(userTwo.email);






