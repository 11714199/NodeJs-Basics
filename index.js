const coreModules = require('./coreModules.js');
const stream = require('./streams.js')
const fileName = "fileName.txt";
// core module
const http = require('http');
const path = require('path');
const os = require('os');


async function fileSystem() {
    try {
        await coreModules.writeFile(fileName);
        await coreModules.appendFile(fileName);
        let data = await coreModules.readFile(fileName);
        console.log(data);
        await coreModules.deleteFile(fileName);
    } catch (err) {
        console.log(err)
    }
}

let server = http.createServer((req, res) => {
    if(req.method == "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello World")
    } else if(req.method == "POST" && req.path == '') {
        res.end("POST API")
    }
})

server.listen(1234, () => {
    console.log("Server running at 1234")
})

// calling third party api with http module
let options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET',
}

const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (result) => {
        console.log('Data:  ', result);
    });

    res.on('end', (result) => {
        console.log("END:  ", result)
    })
})

req.on('error', (err) => {
    console.log("Error: ", err)
})

req.end();

// path module

let join = path.join('/NodeJs-Baiscs','NodeJs-Basics','index.js')
console.log("join: ",join)

let resolve = path.resolve('NodeJs-Baiscs','NodeJs-Basics','index.js')
console.log("resolve: ", resolve) // corrent directory

let resolve1 = path.resolve('NodeJs-Baiscs','/NodeJs-Basics','index.js')
console.log("resolve: ", resolve1)

let baseName = path.basename(join);
console.log("baseName: ", baseName);

let extname = path.extname(join);
console.log("extname: ", extname);

let dirname = path.dirname(join);
console.log("dirname: ", dirname);

let parse = path.parse(join);
console.log("parse: ", parse)

let dir = '/home/madhavi:/NodeJs-Basics:/NodeJs-Basics/NodeJs-Baiscs:/NodeJs-Basics:/index.js'
let delimiter = dir.split(path.delimiter);
console.log("delimiter: ",delimiter)

let formate = path.format({
    root: '/',
    dir: 'home/madhavi/NodeJs-Basics/NodeJs-Basics/NodeJs-Baiscs/NodeJs-Basics',
    base: 'index.js'
})
console.log("formate: ", formate)

let relative = path.relative('/home/madhavi/NodeJs-Basics/NodeJs-Basics/NodeJs-Baiscs/NodeJs-Basics/index1.js', '/home/madhavi/NodeJs-Basics/NodeJs-Basics/NodeJs-Baiscs/NodeJs-Basics1/index.js');
console.log("relative: ", relative)

let sep = join.split(path.sep)
console.log("sep: ", sep)

console.log("*****************  OS  **************************")

console.log("Platform: ", os.platform());
console.log("Type: ", os.type());
console.log("Release: ", os.release());
console.log("Archtecture: ", os.arch());
console.log("CPUs: ", os.cpus().length);
console.log("Total Memeory: ", os.totalmem());
console.log("Free Memory: ", os.freemem());
console.log("Network Information: ", os.networkInterfaces());
console.log("Hostname: ", os.hostname());
console.log("UserInfo: ", os.userInfo());
console.log("Endianness: ", os.endianness())


fileSystem();
stream.streams();
stream.allStream();