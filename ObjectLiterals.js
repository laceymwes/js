// Demonstrating module reveal pattern.
function objFactoryOne() {
  function doSomethingOne() {
    console.log("doSomethingOne function");
  }
  function doSomethingTwo() {
    console.log("doSomethingTwo function");
  }
  return {
    doSomethingOne : doSomethingOne,
    doSomethingTwo : doSomethingTwo
  }
}
var objOne = objFactoryOne();
objOne.doSomethingOne();
objOne.doSomethingTwo();
