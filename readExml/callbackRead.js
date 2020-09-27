const {readFile} = require("fs");

readFile("foods.txt", "utf8", (err, txt) => {
    console.log("Async Callback : " + txt);
});

