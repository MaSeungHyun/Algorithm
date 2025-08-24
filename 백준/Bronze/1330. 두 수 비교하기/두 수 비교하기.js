const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution() {
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);

  if (a-b < 0) {
    console.log("<");
  } else if (a-b > 0) {
    console.log(">");
  } else if (a-b === 0) {
    console.log("==");
  } else {
    throw new Error("Invalid input values");
  }
}

solution();
