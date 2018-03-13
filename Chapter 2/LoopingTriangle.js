/*Written by Ron Yonker, Tuesday, March 13th 2018*/

/*Simplistic. Many ways to write this, I chose a for loop, keeping in mind I might want to refactor this later to inject this into an HTML DOM node later.*/

var output = '';
var rows = 7;
for (var i = 0; i < rows; i++) {
  console.log(output += '#'); /*Each iteration, the output string will have an additional '#'*/
}