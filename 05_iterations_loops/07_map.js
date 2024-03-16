const num = [1,2,3,4,5,6,7,8,9,10]

const add = num.map((num)=> num+10)
//console.log(add);
const multiply = num.map((num)=> {return num*10})
//console.log(multiply);


// 
const newNum = num
                .map((num)=> num *10)
                .map((num)=> num+2)
                .filter((num)=>num >= 40)
              console.log(newNum);
