const readline = require("readline");
const fs = require("fs")
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


//bikim template pertanyaan
const questionTemplate = (question) => {
   return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
          });
    })
}

//pengecekan folder
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

//pengecekan file
const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
}
const mainQuestion = async () => {
    const nama = await questionTemplate("Masukkan nama anda: ")
    const email = await questionTemplate("Masukkan email anda: ")
    const noHP = await questionTemplate("Masukkan nomor telepon anda: ")
    const contact = {nama, email, noHP}
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')

    const contacts = JSON.parse(fileBuffer)

    contacts.push(contact)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))

    rl.close()
}

mainQuestion()