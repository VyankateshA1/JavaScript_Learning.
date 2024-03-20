const user1 = {
  username: "vyanktesh",
  getUser: function () {
    // console.log("got details of user");
    // console.log(`${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUser());
// console.log(this);

function user(userName,loginCount,isLoogedIn){
  this.userName = userName
  this.loginCount = loginCount
  this.isLoogedIn = isLoogedIn

  this.greet=function(){
    console.log('Hello how are you...Welcome to our India...');
  }
 // return this
}

// instance name new obj is created from new keyword
// then constructor fun is called
// then in this keyword all argument get added
const userOne = new user('Vyankatesh',10,true);
const user2 = new user('hello',20,false)
console.log(userOne.greet());
console.log(user2);
