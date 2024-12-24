const fs = require("fs")
const readline = require("readline");
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const saveData = (nama, email, noHP) => {
    const contact = {nama, email, noHP}
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')

    const contacts = JSON.parse(fileBuffer)

    contacts.push(contact)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))

    console.log("Terima kasih sudah menyimpan kontak")

    rl.close()
}

module.exports = {saveData}