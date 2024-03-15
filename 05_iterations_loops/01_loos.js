/************************************** for loop *******************************/

for (let index = 0; index <= 10; index++) {
  const element = index;
  if(element == 5){
    //console.log('5 number');

  }//console.log(element);
}

//

for (let i = 0; i <= 10; i++) {
 // console.log(`Outer loop ${i}`)
 
 for (let j = 0; j <= 10; j++) {
  //console.log(`inner loop values ${j}`);

 }
  
}

let array = ['one','two','three']
for (let index = 0; index < array.length; index++) {
  const element = array[index];
 // console.log(element);
  
}


/*********** Break And Continue ******************/


// it will break loop after the condition
for(let i = 1; i <=20; i++){
  if (i == 5) {
    break;
  }
  //console.log(`value of ${i}`);


}

// continue = it will ignor the condition if its true

for(let i = 1; i <=20; i++){
  if (i == 5) {
    continue;
  }
  console.log(`value of ${i}`);


}

