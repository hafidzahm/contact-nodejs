const fs = require("fs");

//pengecekan folder
const pathLogic = () => {
    const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

//pengecekan file
const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
}

}


module.exports = {pathLogic}
