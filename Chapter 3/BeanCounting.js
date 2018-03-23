 /*Written by Ron Yonker, Wednesday, March 21st 2018*/

function countChar(input, testChar) {
  let count = 0; /*How many times the 'testChar' appears in the string 'input'*/
  for (let i = 0; i < input.length; i++) { /*Take advantage of the fact strings are also arrays to loop across the string, 'input'*/
    if (input[i] == testChar) {
      count += 1; /*Add to count each time the 'testChar' appears, as you loop across the string*/
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B"); /*Why write two functions? This is a special single case of the general function*/
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));