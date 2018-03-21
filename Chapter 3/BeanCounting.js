 /*Written by Ron Yonker, Wednesday, March 21st 2018*/

function countChar(input, testChar) {
  let count = 0; /*How many times the \'91testChar\'92 appears in the string \'91input\'92*/
  for (let i = 0; i < input.length; i++) { /*Take advantage of the fact strings are also arrays to loop across the string, \'91input\'92*/\
    if (input[i] == testChar) {
      count += 1; /*Add to count each time the \'91testChar\'92 appears, as you loop across the string*/
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B"); /*Why write two functions? This is a special single case of the general function*/
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));