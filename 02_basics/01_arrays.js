
// Arrys
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)
// at
// : 
// ƒ at()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ Array()
// copyWithin
// : 
// ƒ copyWithin()
// entries
// : 
// ƒ entries()
// every
// : 
// ƒ every()
// fill
// : 
// ƒ fill()
// filter
// : 
// ƒ filter()
// find
// : 
// ƒ find()
// findIndex
// : 
// ƒ findIndex()
// findLast
// : 
// ƒ findLast()
// findLastIndex
// : 
// ƒ findLastIndex()
// flat
// : 
// ƒ flat()
// flatMap
// : 
// ƒ flatMap()
// forEach
// : 
// ƒ forEach()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// join
// : 
// ƒ join()
// keys
// : 
// ƒ keys()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// map
// : 
// ƒ map()
// pop
// : 
// ƒ pop()
// push
// : 
// ƒ push()
// reduce
// : 
// ƒ reduce()
// reduceRight
// : 
// ƒ reduceRight()
// reverse
// : 
// ƒ reverse()
// shift
// : 
// ƒ shift()
// slice
// : 
// ƒ slice()
// some
// : 
// ƒ some()
// sort
// : 
// ƒ sort()
// splice
// : 
// ƒ splice()
// toLocaleString
// : 
// ƒ toLocaleString()
// toReversed
// : 
// ƒ toReversed()
// toSorted
// : 
// ƒ toSorted()
// toSpliced
// : 
// ƒ toSpliced()
// toString
// : 
// ƒ toString()
// unshift
// : 
// ƒ unshift()
// values
// : 
// ƒ values()
// with
// : 
// ƒ with()
// Symbol(Symbol.iterator)
// : 
// ƒ values()

const arr = [1,2,3,"hello",true]

// arr.push(6)
// arr.unshift()
// arr.pop()

// arr.unshift(0)
// arr.shift()

// console.log(arr.includes(5));
// console.log(arr.indexOf(2));

// const arr2 = arr.join()
// console.log(arr2); //String
// console.log(arr);

/******Slice , Splice************** */

//const arr = [1,2,3,"hello",true]
console.log("a" , arr);

const newArr = arr.slice(1,3)

console.log(arr);
console.log(newArr);

const newArr2 = arr.splice(1,3)
console.log("c ",arr);
console.log(newArr2);
