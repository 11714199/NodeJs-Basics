const coreModules = require('./coreModules.js');
const fileName = "fileName.txt";

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

fileSystem();