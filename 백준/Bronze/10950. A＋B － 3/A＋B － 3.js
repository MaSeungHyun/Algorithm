const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().trim().split("\n");

function solution() {
    const repeat = Number(input[0])
    
    const results = [];
    
    for (let i = 1; i <= repeat; i++) {
        const numbers = input[i].split(" ").map(Number);
    
        results.push(numbers[0] + numbers[1]);
    }

    console.log(results.join("\n"));
}

solution();