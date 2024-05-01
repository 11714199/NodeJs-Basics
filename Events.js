let EventEmitter = require('events');

let event = new EventEmitter();

function events() {
    event.on("start", () => {
        console.log("Hello World!")
    })  
    event.emit('start')

    event.on("greeting", (data) => {
        console.log(`Hii ${data}`)
    })
    event.emit('greeting', 'Madhavi')

    event.on("withFun", withFun);
    event.emit("withFun")
}

function withFun() {
    console.log("Call Function")
}

module.exports = {
    events,
    withFun
}