const express = require("express");
const {readFile} = require("fs").promises;

const app = express();


app.get("/", async (req, res) => {

    res.send(await readFile("./home.html", "utf-8"));

});

app.get("/api/getFood", async (req, res) => {
    res.send(await readFile("readExml/foods.txt", "utf-8"));
});

app.get("/lib/*", async (req, res) => {
    let file = "lib/" + req.url.split("/").pop(); // gets (and removes) last element of array
    res.send(await readFile(file, "utf-8"));
});

app.listen(8080, () => console.log("App is available on port http://localhost:8080"));
