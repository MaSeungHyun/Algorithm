const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().trim().split("\n")

function solution() {
    const value = input[0].trim().split("");
    
    const index = input[1] - 1
    console.log(value[index])
}

solution();