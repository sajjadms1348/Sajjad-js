const heros = ["Sharukh", "Salman", "Amir"]
const heroin = ["Deepika", "Katrina", "Bebo"]

//heros.push(heroin)
//console.log(heros);
const newall = heros.concat(heroin)
//console.log(newall);


const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
//console.log(concatAll)


const all_new_heros = [...heroin,...heros]  // spread method use for joining two or three arrays
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);  // it will merge all the sub arrays and give output as new array with single array.

console.log(Array.isArray("Sajjad"))
console.log(Array.from("Sajjad"))  // 'from' method will make array from string
console.log(Array.isArray({name: "Sajjad"}))

const num1 = 100
const num2 = 200
const num3 = 300

let score = Array.of(num1, num2, num3)
console.log(score);
