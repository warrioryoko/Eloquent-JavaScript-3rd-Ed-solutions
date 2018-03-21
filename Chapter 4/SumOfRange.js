/*Written by Ron Yonker, Wednesday, March 21st 2018*/

function range(start, end, step = start < end ? 1 : -1) { /*I realized a default step of one doesn't work if the start is less than the end*/
  let arr = [];                                           /*If the start is less than the end, default to step value of 1. Otherwise, use step value of -1*/

  if (step > 0) {
    for (let i = start; i <= end; i += step) {            /*Begin at the value of 'start'; while it's less than the value of 'end', add the step to the value of 'start' and push it to the array*/
        arr.push(i);
        }
  }
    else {
        for (let i = start; i >= end; i += step) {        /*Same idea as above, but covers the case that the start is not less than the end*/
            arr.push(i);
        }
    }

    return arr;
  }

function sum(arr) {
    let result = 0;
    for (let value of arr) {    /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of*/
        result += value;        /*Iterating across input array, adding each array element to a counter.*/
    }                           /*At the end of the loop, the counter is the sum of the elements*/

    return result;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));