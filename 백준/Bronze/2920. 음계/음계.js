const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file, "utf8").toString().split("\n");

function solution() {
    
    const scale = input[0].split(" ").map(Number);
    let direction = scale[1] - scale[0] > 0 ? "ascending" : "descending";
    
    for (let i = 1; i < scale.length; i++) {
        if(direction === "ascending") {
            if(scale[i + 1] - scale[i] < 0) {
                return console.log("mixed");
            }
        } else {
            if(scale[i + 1] - scale[i] > 0) {
                return console.log("mixed");
            }
        }
    }

    console.log(direction)

}

solution();