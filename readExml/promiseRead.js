const {readFile} = require("fs").promises;

async function prm() {
    const file = await readFile("/data/foods.txt", "utf8");
    console.log("Prommise : " + file);
}

prm();

console.log("end");