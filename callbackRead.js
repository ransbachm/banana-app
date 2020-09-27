const {readFile} = require("fs");

readFile("data/foods.txt", "utf8", (err, txt) => {
    console.log("Async Callback : " + txt);
});

