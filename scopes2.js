// Demonstrate that function declarations are hoisted to the top
// of enclosing function scope.
function doSomethingOne() {
  doSomethingTwo(); // doSomethingTwo() is hoisted to top at compile time;
  function doSomethingTwo() {
    console.log("inside doSomethingTwo");
  }
}
doSomethingOne(); // prints "inside doSomethingTwo"
