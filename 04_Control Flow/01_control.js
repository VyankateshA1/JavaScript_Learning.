// if 
/*if(condition){

}*/ 

const isPresent = true;

if(isPresent){
  console.log(true);
}
/**Camparision Operatir
 * <,>,<=,>=,==,===,!=,
 */

let temp = 39 
if(temp > 25){
  console.log('today is hot outside🔥');
}else{
  console.log('today is colder');
}

/**************** short hand notetion *****************************/

const balance = 1000
//if(balance > 500) console.log('add more');
if (balance < 500) {
  console.log('less than 500');
}else if(balance < 800){
  console.log('less than 800');
}else{
  console.log('less than 1100');
}

/*********************** &&  *******************************************/

const name = true
const age = 18

if (name && age === 18) {
  console.log('You can give driving licene test');
}

/**************************** || **********************************/

const googleislogged = true
const yahooislogged = false

if (googleislogged || yahooislogged) {
  console.log('You have been logged in');
}