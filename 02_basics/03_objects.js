// singleton - 

// Object Literals
// Object.create - another method to declare obj


// defining Symbol
const mysymbol = Symbol("key")

const student = {
name : "Vyankatesh",
"surname" : "Andhale",
[mysymbol] : "key1",
age : 25,
country : "India",
email : "123@gmail.com",
isRegular : true,
lastLoginDays : ["Monday","Friday"]
}

console.log(student.age);
console.log(student["age"]);
console.log(student["surname"]);
console.log(student.surname);
console.log(typeof student.mysymbol);
console.log(typeof student[mysymbol]);

student.email = "vyan@gmail.com"
//Object.freeze(student)  // it freez the all editing
student.email = 'micro@gmail.com'
console.log(student.email);
console.log(student);

//function

student.greeting = function(){
  console.log("Good Morning....");
}
console.log(student.greeting());
//

student.greetingtwo = function(){
  console.log(`hello ${this.name}`);
}
console.log(student.greetingtwo());

// console.log(student);
