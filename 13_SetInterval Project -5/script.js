const random = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}
let intervalId;
const starChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(chnageColor, 1000);

  }
  function chnageColor(){
   document.body.style.backgroundColor = random()

  }
}

const stopChangingColor = function(){
clearInterval(intervalId)
intervalId = null;
}


document.querySelector('#start').addEventListener('click',starChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)