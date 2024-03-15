const arr = ["one", "two", "three"];

arr.forEach(function (item) {
  //console.log(item);
});

arr.forEach((value) => {
  // console.log(value);
});

function print(item) {
  console.log(item);
}

//arr.forEach(print);

arr.forEach((item, index, array) => {
  //console.log(item,index,array);
});

//
const myArr = [
  {
    name: "vyankatesh",
    location: "India",
  },
  {
    name: "Ram",
    location: "India",
  },
  {
    name: "laksh",
    location: "US",
  },
];

myArr.forEach((item) => {
  console.log(item.name);
});
