var myArr = [1, 2, 3, 4];

var iterator = myArr[Symbol.iterator]();

console.log("Iteration through array using iterator object return by iterator function.");
for (var i = 0; i < myArr.length; i++) {
  console.log(iterator.next());
}

console.log("Iteration through object properties utilizig the for in loop");
var myObj = {
  a : "value a",
  b: "value b",
  c: "value c"
};

console.log("Property keys/names first: \n")
for (var o in myObj) {
  console.log(o);
}

console.log("Property values next: \n")
 for (var o in myObj) {
   console.log(myObj[o]);
 }