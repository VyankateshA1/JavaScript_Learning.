// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// to avoid3 global scope polution use iife


//named iife
(function MessageChannel() {
  console.log("connected");
})();

//witout named with parametere iife
((name) => {
  console.log(`hello ${name}`);
})('vyankatesh');
