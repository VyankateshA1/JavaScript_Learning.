//const userEmail = "124@gmail.com"
const userEmail = []

if (userEmail) {
  console.log(`Your email is ${userEmail}`);
}else{
  console.log('please enter email');
}

/********** False Values ****************/
/**
 * false = 0 = -0 = BigInt 0n = " " = null = undefined = Nan // {those are all false values..}
 */

/*********** True Values ******************/
/**
 *  true = 1 = "0" = 'false' = ' ' = [] = {} = function(){//empty function} = 
 */

if (userEmail.length === 0) {
  console.log('Array is empty');
}

const newObj = {}
if (Object.keys(newObj).length === 0) {
  console.log('Object is empty');
}


/************ Nullish Coalescing Operator (??) : null undefined */

let val1;

// val = undefined ?? 100
// val = null ?? 100
//val = 10 ?? 100
val = null ?? 10 ?? 15

console.log(val);

/*********** Terniary Operator (?) */

/**
 * Condition ? true : false
 */

const age =1
age >=18 ? console.log('You can drive') : console.log("You cant drive ");