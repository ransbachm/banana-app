const {EventEmitter} = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {

    console.log("yum xD 🍏 🍎 🍐 🍊 🍋 🍌 🍉")
})

eventEmitter.emit("lunch")
eventEmitter.emit("lunch")