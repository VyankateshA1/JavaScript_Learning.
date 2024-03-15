/************** for of ******************/

/**
 * for (const iterator of object) {
  
}
 */

const arr = [1,2,3,4,5]

for (const nums of arr) {
 // console.log(nums);
}

//

const greet = "hello , welcome to India."

for (const msg of greet) {
 // console.log(`${msg}`);
}

/************** Maps ***********************/

const map = new Map()
map.set('IN' , 'India')
map.set('US','United State')

console.log(map);

// for (const newmap of map) {
//   console.log(newmap);
  
// }
for (const [key,value] of map) {
  //console.log(key,"-",value);
  
}

//

const obj = {
  myname : "vyan"
}

for (const newOb of obj) {
  //console.log(newOb); // not iterable
}