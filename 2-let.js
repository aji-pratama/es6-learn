// /* Basic III 
function varFunc() {
  var previous = 0;
  var current = 1;
  var i;
  var temp;

  for(i = 0; i < n; i += 1){
    temp = previous;
    previous = current;
    current = temp + current;
  }
}

function letFunc(){
  let previous = 0;
  let current = 1;

  for (var i = 0; i < n; i += 1) {
    let  temp = previous;
    previous = current;
    current = temp + current;
  }
}


// /* Basic II
var fs = [];

//10 10 10 10 10 10 10 10 10 10
for (var i = 0; i < 10; i++){
  fs.push(function(){
    console.log(i);
  })
}

//0 1 2 3 4 5 6 7 8 9
for (let i = 0; i < 10; i++){
  fs.push(function(){
    console.log(i);
  })
}

//Print
fs.forEach(function(f) {
  f();
})


// /* Basic I
var js = "Hai";
{
  var js = "Bye";
}

let es6 = "Hai";
{
  let es6 = "Bye";
}

console.log(js); // Bye
console.log(es6); //Hai
// */

// Kesimpulan let mendefinisikan variable yang tak bisa di rubah di bawahnya- sedang var bisa di rubah
