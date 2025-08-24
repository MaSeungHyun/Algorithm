const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");

function solution() {
  const last = Number(input);
  const result = Array.from({ length: last }, (_, i) => i + 1).join("\n");

  console.log(result);
}

solution();
