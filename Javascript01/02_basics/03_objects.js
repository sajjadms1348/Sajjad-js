// singleton


// objects literals

const mySym = Symbol("key1")  // if we need to call these symbol from objects, then we have one method that is mentioned below
const msuser = {
    name: "Sajjad",
    "full name": "sajjad",
    mySym: "mykey2",
    [mySym]: "mykey3",
    id: 102,
    location: "Bangalore",
    email: "abc@abc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturaday"]
}

//console.log(msuser.email);  // this one method we can call objects
//console.log(msuser["email"]);  // this method is we use for calling the objects.
// console.log(msuser["full name"]);
// console.log(msuser.mySym);
// console.log(typeof msuser.mySym);
// console.log(msuser[mySym]);

msuser.email = "abc@gmail.com"
//console.log(msuser.email);
//Object.freeze(msuser)  // freezing the objects
msuser.email = "abc@yahoo.com"
//console.log(msuser);

// we can call functions as well from objects

msuser.greetings  = function(){
    console.log("Hello Sajjad, Good morning");
    
}
msuser.greetingsTwo  = function(){
    console.log(`Hello Sajjad, ${this.name}`);
    
}
console.log(msuser.greetings());
console.log(msuser.greetingsTwo());



