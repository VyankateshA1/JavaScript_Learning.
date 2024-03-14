// functions

function nameMy(){
  console.log("vyanktesh");
}

//nameMy()

function addTwoNums (num1,num2){
 // console.log(num1+num2)
}

const result = addTwoNums(3,5)
//console.log(result);


///
function addNums (num1,num2){
  return num1 + num2
}
const sum = addNums(5,5)
//console.log(sum);


function msg (userName="user"){
  return `Have a nice day ${userName}`
}

//console.log(msg());

let myMsg = msg('Vyankatesh')
//console.log(myMsg);


function calculateCartPrice (...num1){ // (...)rest/spread op
  return num1
}

//console.log(calculateCartPrice(2,55,200,299));

//

function calculateCartPrice2 (val1,val2,...num1){ // (...)rest/spread op
  return num1
}

//console.log(calculateCartPrice2(2,55,200,299));

const user = {
  item : "shirt",
  price : 1999
}

function handObject (anyobject) {
  console.log(`the ${anyobject.item} has price of ₹ ${anyobject.price}`);
}

//handObject(user)

handObject({
  item : 'jeanse',
  price : 5999
})

const arr = [100,200,199,300]

function retunArray (getArr){
  return getArr[1]
}

console.log(retunArray(arr));
console.log(retunArray([10,200,500,600]));
