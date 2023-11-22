const coreModules = require('./coreModules.js');
const fileName = "fileName.txt";
// core module
const http = require('http');


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
    } else if(req.method == "POST") {
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

fileSystem();