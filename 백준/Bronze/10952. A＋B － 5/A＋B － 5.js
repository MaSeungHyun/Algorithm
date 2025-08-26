const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().trim().split("\n");

function solution() {
    const repeat = input.length
    
    const results = [];
    
    for (let i = 0; i <= repeat; i++) {
        const numbers = input[i].split(" ").map(Number);

        const a = numbers[0];
        const b = numbers[1];
    
        if(a === 0 && b === 0) {
            break;
        }
        
        results.push(a + b);
    }
    
    
    console.log(results.join("\n"));
}

solution();