const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

function solution() {
  const count = parseInt(input[0]);

  for (let i = 0; i < count; i++) {
    console.log("*".repeat(i + 1));
  }
}

solution();
