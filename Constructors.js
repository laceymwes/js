function doSomething(val) {
  this.name = val;
}

console.log("Assign myName() to doSomething's prototype object.");
doSomething.prototype.myName = function() {
  return this.name;
}

console.log("Declare objOne as prototype-linked to doSomething() with \"new\" keyword.\n");
var objOne = new doSomething("set-name");


// myName() function is resolved at the prototype object.
console.log("ojbOne.myName(): ");
console.log(objOne.myName() + "\n");

console.log("constructor assigned to the doSomething prototype object: " +
doSomething.prototype.constructor);
