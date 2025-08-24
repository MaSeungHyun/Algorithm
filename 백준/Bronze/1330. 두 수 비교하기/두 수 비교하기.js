const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution() {
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);

  const diff = a - b;
  
  if (diff < 0) {
    console.log("<");
  } else if (diff > 0) {
    console.log(">");
  } else if (diff === 0) {
    console.log("==");
  } else {
    throw new Error("Invalid input values");
  }
}

solution();
