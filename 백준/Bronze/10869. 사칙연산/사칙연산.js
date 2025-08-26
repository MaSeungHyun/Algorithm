const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt", "utf8");

function solution() {
    const numbers = input.split(" ").map(Number);

    console.log(numbers[0] + numbers[1]);
    console.log(numbers[0] - numbers[1]);
    console.log(numbers[0] * numbers[1]);
    console.log(Math.floor(numbers[0] / numbers[1]));
    console.log(numbers[0] % numbers[1]);
}

solution();