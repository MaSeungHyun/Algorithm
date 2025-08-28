const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().split("\n")

function solution() {
    const testCase = Number(input[0]);

    const numbers = input[1].split(" ").map(Number);

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    console.log(min, max);    
}

solution();
