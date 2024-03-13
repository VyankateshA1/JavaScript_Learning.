// Premitive Datatypes

// 1 . String
// 2 . Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7 . BigInt

const num = 100
const marks = 50.65

const isPassed = true
const isPresent = null

const id = Symbol(121)
console.log(id);

const id2 = Symbol(121)
console.log(id === id2);

const bigNum = 55545676453465463n // bigInt
console.log(typeof bigNum)

// Reference Type (Non-Premitive DayaTypes)

// 1. Array
// 2. Objects
// 3. Functions

const arr = [1,2,3,4,5,6];
console.log(arr);

let myInfo = {
  name :"vyankatesh",
  age : 24,
  id : 2
};
console.log(myInfo.age);

const myfunc = function(){
  console.log("hello world")
}

myfunc()


//*************************Stack And Heap**************** */
//Stack (Primitive) & Heap (non-primitive)

let msg = "hii, have a nice day. Good Morning..."
let newMsg = msg
newMsg = "Good AfterNoon...."
console.log(msg);
console.log(newMsg);

let user={
  email : "11@gmail.com",
  id : 1211
}
let userTwo = user

user.email = "abc@gmail.com"
console.log(user);
console.log(userTwo);