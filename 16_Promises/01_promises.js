//fetch()

const promisOne = new Promise(function (resolve, reject) {
  //Async task
  //db calls, Cryptography, network
  setTimeout(function () {
    console.log("Async task completed.");
    resolve();
  }, 1000);
});

promisOne.then(function () {
  console.log("Promis consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 2 ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "Vyankatesh",
      email: "123@gmail.com",
      city: "Vice City",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //let error = true
    let error = false;
    if (!error) {
      resolve({ username: "Vyankatesh", pass: "321123" });
    } else {
      reject("Error Occured");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Finally The Promise is either resolve or rejectedN");
  });

//5

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ country: "India", code: "+91" });
    } else {
      console.log("Error occured.....in Promise Five");
    }
  }, 1000);
});

async function takePromiseFive() {
  const res = await promiseFive;
  console.log(res);
}

// async function getRepo() {
//   const res = await fetch("https://api.github.com/users/VyankateshA1");

//   const data =await res.json()
//   console.log(data.id);
// }

//getRepo()

//

fetch("https://api.github.com/users/VyankateshA1")
.then((respons)=>{
  return respons.json()
})
.then((Data)=>{
  console.log(Data);
})
.catch((err)=>console.log(err))