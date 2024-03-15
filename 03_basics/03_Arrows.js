
const user = {
  name : "Vyankatesh",
  price : 1999,

  welcomemsg : function (){
    console.log(`${this.name} , welcome to website`);
  // console.log(this);
  }
}

//user.welcomemsg()

user.name = "Ram"
user.welcomemsg()
console.log(user.welcomemsg());
console.log(this);



function hello () {
  let user = 'vyan'
  console.log(this.user);
}
hello()



const greet =()=>{
  let user = 'vyan'
  console.log(this.user);
}
greet()


// const addTwo = (num1,num2)=>{
//   return num1 + num2
// }
// console.log(addTwo(2,5));

const addTwopluse = (num1,num2)=>num1 + num2

console.log(addTwopluse(55,10));

//
const addTwo = (num)=>num + num
console.log(addTwo(5));

const newuser = (e)=>({name:"vyan"})
console.log(newuser.name);

