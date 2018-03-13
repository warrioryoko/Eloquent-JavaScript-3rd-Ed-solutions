/*Written by Ron Yonker, Tuesday, March 13th 2018*/

var size = 8; //chessboard grid will be size x size (rows x columns)

var gridLine = ""; //using this variable to build the final string

for (var row = 0; row < size; row++) {   /*outer loop counts the rows*/
  for (var column = 0; column < size; column++) {/*inner loop populates the line of each row with ' ' or '#' to the final string*/
    if ((row + column) % 2 == 0)
      gridLine += " ";
    else
      gridLine += "#";
  }
  gridLine += "\n"; /*the newline is to separate rows; this will fire each iteration of the outer loop*/
}

console.log(gridLine);