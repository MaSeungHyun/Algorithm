const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().split("\n")

function solution() {
    const repeat = Number(input[0])

    let sum = 0;

    const numbers = input[1].split("").map(Number)

    for(let i=0; i<repeat; i++) {
        sum += numbers[i]
    }

    console.log(sum)
}

solution();