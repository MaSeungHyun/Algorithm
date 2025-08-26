const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt", "utf8");

function solution() {
    const year = Number(input);

    if ((year % 4 === 0 && year % 100 !== 0 )|| year % 400 === 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}

solution();