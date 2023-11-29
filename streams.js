const { Readable, Writable } = require("stream")
const fs = require('fs');


async function streams() {

    // with file system
    let file = fs.createWriteStream('filename.txt');
    let file1 = fs.createWriteStream('fileName.txt');
    let file2 = fs.createWriteStream('file.txt');
    let pipeFile = fs.createWriteStream('pipeFile.txt')
    for(let i = 0; i < 16; i++) {
        file.write("Hello World!")
    }
    file.on('drain', (res) => {
        console.log(res)
    })

    fs.readFile(file.path, 'utf-8', (err, data) => {
        if(!err) {
            //console.log(data)
        }
    });

    let data = fs.createReadStream(file.path, 'utf-8')
    data.on('data', res => {
        file1.write(res)
    })

    data.on('error', (err) => {
        console.log(err);
    })

    data.on('end', () => {
        console.log('END')
    })

    /******************* PIPE **********************/

    let read = fs.createReadStream('filename.txt')
    read.pipe(pipeFile)

    /********************** with interfaces ****************/
    let writeStream = new Writable({
        write(chunk, encoding, readAndWriteStream) {
            console.log(chunk.toString())
            file2.write(chunk.toString())
        },       
    })

    writeStream.write('Hii ');
    writeStream.write('Madhavi!');
    //writeStream.end();

    writeStream.on('drain', (res) => {
        console.log(res);
    })
    writeStream.on('finish', () => {
        console.log();
    })

    let readStream = new Readable({
        read(data) {
            console.log(data)
        }
    })

    readStream.push('Hii');
    readStream.push("Madhavi");
    readStream.push(null);

    readStream.on("data", (data)=> {
        console.log("Readable Stream: ", data.toString())
    })

    /********* Duplex Stream **************/
}

async function allStream() {
    process.stdin.on('data', (msg) => {
        console.log(msg.toString().toUpperCase())
    })

    //process.stdout.write("Enter name: ")
    console.log("Enter Name: ")
    process.stdout.on('data', (msg) => {
        console.log(`Hii ${msg.toString().toUpperCase()}`);
    })
}

module.exports = {
    streams,
    allStream
}
