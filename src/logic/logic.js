const fs = require("fs")
const chalk = require("chalk")
const validator = require("validator")

const saveData = (nama, email, noHP) => {
    const contact = {nama, email, noHP}
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')

    const contacts = JSON.parse(fileBuffer)

    //verify-first
    const duplicateData = contacts.find((contact) => contact.nama === nama)
    if (duplicateData) {
        console.log(chalk.red.inverse.bold("Kontak sudah terdaftar"))
    return false
    }

    //email validator
    if (email) {
        if(!validator.isEmail(email)) {
            console.log(
                chalk.red.inverse.bold("Email tidak valid!")
            );
            return false
        }
    }

    // number validator
    if(!validator.isMobilePhone(noHP, "id-ID")) {
        console.log(
            chalk.red.inverse.bold("Nomor handphone tidak valid!")
        );
        return false
    }



    contacts.push(contact)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))

    console.log("Terima kasih sudah menyimpan kontak")

}

module.exports = {saveData}