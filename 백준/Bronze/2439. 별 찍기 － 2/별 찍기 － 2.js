const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8")

function solution() {
    for(let i=1; i<=input; i++) {   
        console.log(" ".repeat(input - i) + "*".repeat(i));
    }
}

solution();