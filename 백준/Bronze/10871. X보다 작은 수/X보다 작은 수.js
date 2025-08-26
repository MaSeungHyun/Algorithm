const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().trim().split("\n");

function solution() {
    const line1= input[0].split(" ");
    const n = Number(line1[0]);
    const x = Number(line1[1]);
    
    const line2= input[1].split(" ");

    const buffer = []
    
    line2.forEach(number => {
        if (number < x) {
            buffer.push(number);
        }
    });
    console.log(buffer.join(" "));
}

solution();