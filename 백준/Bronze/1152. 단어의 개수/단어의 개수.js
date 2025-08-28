const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().trim();

function solution() {
    console.log(input ? input.split(/\s+/).length : 0);
}

solution();






