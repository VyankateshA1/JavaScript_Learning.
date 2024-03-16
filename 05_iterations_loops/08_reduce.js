const arr = [1,2,3]

const total = arr.reduce( function (acc , curValue){
 console.log(`acc : ${acc} and curValue : ${curValue}`);
  return acc + curValue;
},0)

console.log(total);

//

const myTotal = arr.reduce((acc,curv)=>acc+curv,0)

console.log(myTotal);

// shopping cart
const shoppingCart = [
  {
    item : 'shirt',
    price : 199,
  },
  {
    item : 'T-shirt',
    price : 99,
  },
  {
    item : 'jeanse',
    price : 1999,
  },
  {
    item : 'belt',
    price : 49,
  },
]

console.log(shoppingCart);
const shopTotal = shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(shopTotal);