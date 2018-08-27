// Demonstrate difference between var and let
// var variables declared within a nested scope are still accessbile in outer
// enclosing scopes.
// let variables are not hoisted to outer enclosing scopes, and are not
// accessible.
function doSomethingOne(){
  {
  var one = 3;
  }
console.log(one); // prints 3
}

function doSomethingTwo(){
  {
    let two = 3;
  }
  console.log(two); // will not compile.
}
doSomethingOne();
doSomethingTwo();
