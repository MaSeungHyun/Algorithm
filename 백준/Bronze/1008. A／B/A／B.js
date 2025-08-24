const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution() {
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);

  console.log(a / b);
}

solution();
