// const instaUser = new Object()  --this is Singlton Object
const instaUser = {} // -- this is non-Singlton Object


instaUser.id = "121"
instaUser.name = "vyan"
instaUser.logged = false

//console.log(instaUser);

const fbUser = {
  email : "111fb@gmail.com",
  fullname : {
    userFullName : {
      firstname : "Vyankatesh",
      lastname:"andhale"
    }
  }
}

//console.log(fbUser.fullname.userFullName.firstname);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj4 = {5:'e',6:'f'}
//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

const users = [
  {
    id : 1,
    email :"aaa@gmail",
  },
  {
    id:2,
  }

]



// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

// console.log(instaUser.hasOwnProperty('name'));



// * distructure

const me = {
  name : 'vyankatesh',
  study : 'student'
} 
// me.study

// const {study} = me
// console.log(study);

const {study : s} = me
console.log(s);

// const nav = ()=>{

// }
// nav(com)

// api

// {
//   name : "vyan"
//   surname : "andhale",
//   student : true
// }