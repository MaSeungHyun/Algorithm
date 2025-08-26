const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8")

function solution() {
    console.log(input.charCodeAt())
}

solution();