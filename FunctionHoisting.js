
function outerMostFunc() {
  innerMostFunc(); // will not compile
  secondOuterMostFunc();
  function secondOuterMostFunc() {
    innerMostFunc(); // will compile since function declaration is hoisted to
    // top of enclosing function scope.
    function innerMostFunc() {
      console.log("inner most function.")
    }
  }
}
outerMostFunc();
