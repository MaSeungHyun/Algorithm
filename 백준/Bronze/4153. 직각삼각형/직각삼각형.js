const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const repeat = input.length;

  for (let i = 0; i < repeat; i++) {
    const triangle = input[i].split(" ").map(Number);

    const sorted = triangle.sort((a, b) => a - b);

    const a = sorted[0];
    const b = sorted[1];
    const c = sorted[2];

    if (a === 0 && b === 0 && c === 0) {
      break;
    }

    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
};

solution();
