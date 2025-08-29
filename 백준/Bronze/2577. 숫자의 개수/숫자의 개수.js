const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().split("\n");

function solution() {
    const numberArray = new Array(10).fill(0);
    
    const total = Number(input[0]) * Number(input[1]) * Number(input[2]);

    total.toString().split("").forEach(number => {
        numberArray[Number(number)]++;
    });

    console.log(numberArray.join("\n"));
    
}

solution();