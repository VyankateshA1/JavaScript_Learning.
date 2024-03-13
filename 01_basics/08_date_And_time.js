// *************** Dates & Time *****************//

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

console.log(typeof myDate);


let newDate = new Date(2022,1,11) //moths start from 0 index 0 = jan / 11 = dec
// console.log(newDate.toString());

let myNewDate = new Date("03-13-2024")
// console.log(myNewDate.toString());
//console.log(myNewDate.getTime());

let myTime = Date.now()
//console.log(myTime);
console.log(Math.round(Date.now()/100));

let dDate = new Date()

console.log(dDate.getFullYear());
console.log(dDate.getMonth()+1);

(dDate.toLocaleDateString('default',{
   weekday:"long",
   calendar:dDate
}))


