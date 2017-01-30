/* Basic III
let receive = (complete = () => console.log("complete")) => complete();
receive();

/* Basic II
function receive(complete) {
  complete()
}
receive(function () {
  console.log("complete");
});

/* Basic I
function greet(greeting, name){
  console.log(greeting +", "+ name);
}
greet()
//undefined, undefined

function greet1(greeting, name="John") {
  console.log(greeting +", "+ name);
}
greet1("IniGreeting")
*/
