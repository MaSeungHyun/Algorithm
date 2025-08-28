const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().split("\n")

function solution() {
    const array = input[0].split(" ");
    let initCount = 0;

    array.forEach((word, index) =>{
        if(index === 0 || index === array.length - 1) {
            if(word.trim().length === 0) {
                initCount--;
            }
        }
    })

    console.log(array.length + initCount);
}

solution();