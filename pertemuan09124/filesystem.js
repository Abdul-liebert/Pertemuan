const fs = require('fs')

fs.writeFileSync("perkenalan.txt", "Hello i'm Abdoel")

const perkenalan = fs.readFileSync("perkenalan.txt")
console.log(perkenalan.toString())

// console.log(fs)
//writeFileSync
//unlinkSync
//mkdirSync