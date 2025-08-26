const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().trim().split("\n");

function solution() {
    const repeat = input.length
    
    const results = [];
    
    for (let i = 0; i < repeat; i++) {
        const numbers = input[i].split(" ").map(Number);
    
        results.push(numbers[0] + numbers[1]);
    }

    console.log(results.join("\n"));
}

solution();