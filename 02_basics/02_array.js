const marvel = ["Thor",'Ironman']
const dc = ['Superman','Batman']

//marvel.push(dc)

// console.log(marvel);
// console.log(marvel[1][1]);

// let con = marvel.concat(dc)
// console.log(con);

// const allHeros = [...marvel,...dc] // Spread OP
// console.log(allHeros);

const arr =[1,2,3,[4,5,6],7,[8,9,7,6],10,11]

const newArr = arr.flat(Infinity) // Flat
console.log(newArr);


console.log(Array.isArray('vyan'))
console.log(Array.from('vyan'));
console.log(Array.from({name:'vyan',age:"22"}));

let value1 = 100
let value2 = 200
let value3 = 300

console.log(Array.of(value1,value2,value3));