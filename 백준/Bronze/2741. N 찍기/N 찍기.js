const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");

function solution() {
  const lastNumber = Number(input);

  for (let i = 1; i <= lastNumber; i++) {
    console.log(i);
  }
}

solution();
