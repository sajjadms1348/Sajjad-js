const name = "sajjad "
const score = 654

console.log(name + score + " Scored");

//use backtext
console.log(`Hello my name is ${name} and my score is ${score}`);

const gameName = new String("sajjad")

console.log(gameName[3]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Sajjad  "
console.log(newStringOne);
console.log(newStringOne.trim());

let url = "https://www.sajjad.com/ms%209sajjad"

console.log(url.replace('%209', '__'))

console.log(url.includes('saj'));

const oneString = "Mohammad-sajjad-com"

console.log(oneString.split('-'));



