// Number

// constructor
// : 
// ƒ Number()
// toExponential
// : 
// ƒ toExponential()
// toFixed
// : 
// ƒ toFixed()
// toLocaleString
// : 
// ƒ toLocaleString()
// toPrecision
// : 
// ƒ toPrecision()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
const score = 1001
// console.log(score);
const balance = new Number(1000001)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const n = 12.222666
//console.log(n.toPrecision(2));

const lakh = 1000000
//console.log(lakh.toLocaleString('en-IN'));

// Number.MIN_VALUE
// 5e-324
// Number.ma
// undefined
// Number.MAX_VALUE
// 1.7976931348623157e+308


/************* Math *******************/ 

// abs
// : 
// ƒ abs()
// acos
// : 
// ƒ acos()
// acosh
// : 
// ƒ acosh()
// asin
// : 
// ƒ asin()
// asinh
// : 
// ƒ asinh()
// atan
// : 
// ƒ atan()
// atan2
// : 
// ƒ atan2()
// atanh
// : 
// ƒ atanh()
// cbrt
// : 
// ƒ cbrt()
// ceil
// : 
// ƒ ceil()
// clz32
// : 
// ƒ clz32()
// cos
// : 
// ƒ cos()
// cosh
// : 
// ƒ cosh()
// exp
// : 
// ƒ exp()
// expm1
// : 
// ƒ expm1()
// floor
// : 
// ƒ floor()
// fround
// : 
// ƒ fround()
// hypot
// : 
// ƒ hypot()
// imul
// : 
// ƒ imul()
// log
// : 
// ƒ log()
// log1p
// : 
// ƒ log1p()
// log2
// : 
// ƒ log2()
// log10
// : 
// ƒ log10()
// max
// : 
// ƒ max()
// min
// : 
// ƒ min()
// pow
// : 
// ƒ pow()
// random
// : 
// ƒ random()
// round
// : 
// ƒ round()
// sign
// : 
// ƒ sign()
// sin
// : 
// ƒ sin()
// sinh
// : 
// ƒ sinh()
// sqrt
// : 
// ƒ sqrt()
// tan
// : 
// ƒ tan()
// tanh
// : 
// ƒ tanh()
// trunc
// : 
// ƒ trunc()

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.22));
// console.log(Math.floor(1.9));
// console.log(Math.pow(2,2));
// console.log(Math.min(1,3,6,-10)

//console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1) + min))
