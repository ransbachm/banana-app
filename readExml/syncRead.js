const {readFileSync} = require("fs");


const txt = readFileSync("data/foods.txt", "utf8");
console.log("Sync : " + txt);
