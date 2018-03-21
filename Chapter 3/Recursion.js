/*Written by Ron Yonker, Wednesday, March 21st 2018*/

function isEven(n) {
  n = Math.abs(n); /*No need to juggle a negative number, if the behavior should be unchanged*/
    if (n===0)
      return true; /*Don\'92t use modulus. We\'92re not performing arithmetic, we\'92re using recursion. Applying recursion, we should only have two end cases*/
    else if (n===1)
      return false;
    else
      return isEven(n-2); /*If we haven\'92t reduced the problem to one of two end cases, continue recursing*/
}

console.log(isEven(50), isEven(75), isEven(-1));