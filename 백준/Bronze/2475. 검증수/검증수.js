const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution() {
  const result = input.reduce(
    (acc, curr) => acc + Math.pow(Number(curr), 2),
    0
  );

  console.log(result % 10);
}

solution();
