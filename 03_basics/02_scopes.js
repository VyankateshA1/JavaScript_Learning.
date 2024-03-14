if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
//console.log(a);
//console.log(b);
//console.log(c);

//Nested scope

function one() {
  const name = "Vyan";
  console.log("hello");
  function two() {
    const site = "Google";
    console.log(name);
  }
  //console.log(site);

  // two()
}

// one()

/********************************** **********/

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

//addOne(5);


const sum = function(num){
  return num +2
}

sum()