// array

const myArr1 = [0, 1, 2, 3, 4, 5, "Sajjad"]
//console.log(myArr1[6]);

const myArr2 = new Array(1, 2, 3)
//console.log(myArr2[2]);


//Array method

myArr1.push(6)  // it will add the value
myArr1.pop(6)   // it will remove the last value
myArr1.unshift(2)  // it will add the value in starting of the index, rare will use
myArr1.shift(8)  // it will remove the first value in index

//console.log(myArr1.includes(20)); // it will display true or false base on the value present in array.

//console.log(myArr1);

// slice and splice

console.log("A", myArr1);
const myn1 = myArr1.slice(1, 3) // it will give the value from array starting from 1 then 2 and it does not print 3rd value
console.log(myn1);
console.log("B", myArr1);
const myn2 = myArr1.splice(1, 3)
console.log("C", myArr1);

console.log(myn2);
//it will give the value from array starting from 1 then 2 and it will also print 3rd value as well.


