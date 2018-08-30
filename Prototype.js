var objOne = {
  a : "value a"
}

// define getters and setters for "a" property.
// Object.defineProperty(
//   objOne,
//   "a",
//   {
//     set : function(val) {
//       this._a = val;
//     },
//     get : function() {
//       return this._a;
//     }
//   }
// );

// create object linked to objOne through built-in prototype Property
var objTwo = Object.create(objOne);

console.log("Set property of \"a\" on objTwo which is linked to objOne.")

// Prototype chain should be examined. No objTwo property a is found
// and the objOne writable property descriptor is defaulted to true
// so a new a property will be created and assigned the value of 4.
objTwo.a = 4;

console.log("objOne property a: " + objOne.a);
console.log("objTwo property a: " + objTwo.a);

console.log("Now set objOne property descriptor writable to false.");

// Set objOne's "a" writable property descriptor to false to dissallow
// value setting and linked object property shadowing.
Object.defineProperty(
  objOne,
  "a",
  {
    writable : false
  }
);

console.log("Create new linked object, objThree");

var objThree = Object.create(objOne);

// Prototype chain is examined for a property. Its found on objOne, but the
// writable property descriptor is set to false. Setting of objOne
// property and creation of objThree property fail silently without "strict"
// mode initialized.
objThree.a = 45;

console.log(objThree.a);
