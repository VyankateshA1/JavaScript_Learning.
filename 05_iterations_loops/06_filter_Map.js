const student = ["Ram", "Jay", "Krishna", "Vyankatesh"];

const values = student.forEach((item) => {
  // console.log(item);
  //return item
});

//console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]

let newNum = nums.filter((num)=> num > 4)
//console.log(newNum);

//*
const anotherNum = nums.filter((num)=>{
  return num > 4
})
//console.log(anotherNum);((


//*

const newNum2 = []

nums.forEach((nums)=>{
  if (nums > 4) {
    newNum2.push(nums)
  }
})
//console.log(newNum2);

//*
const school = [
  {
    student1 : " Ram",
    Surname : "Andh",
    age : 21,
  },
  {
    student2 : "Jay",
    Surname : "jaylasy",
    age : 21,
  },
  {
    student1 : "vyankatesh",
    Surname : "Andhale",
    age : 24,
  },
  {
    student1 : "krishna",
    Surname : "yadav",
    age : 24,
  },
]

const age = school.filter( (nm) => nm.age === 21)
console.log(age);
const age2 = school.filter( (nm) => {return nm.age > 21})
console.log(age2);

const info = school.filter((st)=> st.age === 24 && st.student2)
console.log(info);