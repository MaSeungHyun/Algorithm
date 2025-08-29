const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().split("\n");

function solution() {
    const testCase = Number(input[0]);

    let resultArray = [];
    for(let i = 0; i < testCase; i++) {
        let stackPoint = 0;
        let result = 0;

        input[i+1].split("").forEach(char => {
            if(char === "O") {
                stackPoint++;
                result += stackPoint;
            } else {
                stackPoint = 0;
            }
        });
        resultArray.push(result);
    }

    console.log(resultArray.join("\n") );   
}

solution();