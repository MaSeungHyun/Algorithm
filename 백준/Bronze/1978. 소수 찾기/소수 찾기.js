const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().trim().split("\n");

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution() {    
    const n = Number(input[0]);

    const numbers = input[1].split(" ").map(Number);

    const result = [];

    numbers.forEach(number => {
        if (isPrime(number)) {
            result.push(number);
        }
    });
    
    console.log(result.length);
}

solution();