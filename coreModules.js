// core Modules
let fs = require("fs").promises;

async function writeFile(fileName) {
    fs.writeFile(fileName, "Hello Everyone", (err, res) => {
        if(err) {
            console.log("Error in writeFile()");
        } else {
            console.log('File has been written successfully.');
        }
    })
}

async function readFile(fileName) {
    return fs.readFile(fileName, 'utf8', (err, data) => {
        if(err) {
            console.log("Error in readFile()");
        } else {
            //return data;
        }
    })
}

async function appendFile(fileName) {
    fs.appendFile(fileName, " Hii", (err, res) => {
        if(err) {
            console.log("Error in appendFile()");
        } else {
            console.log('File has been appended successfully.');
        }
    })
}

async function deleteFile(fileName) {
    fs.unlink(fileName, (err) => {
        if(err) {
            console.log("Error in deleteFile()", err)
        }
    })
}

// user created modules
module.exports = {
    writeFile,
    readFile,
    appendFile,
    deleteFile
}