const fs = require("fs")
const chalk = require("chalk")
const validator = require("validator")

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
const contacts = JSON.parse(fileBuffer)
return contacts

}



const saveData = (nama, email, noHP) => {
    const contact = {nama, email, noHP}
    const contacts = loadContact()


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

    console.log(chalk.green.inverse.bold(`Kontak dengan nama ${nama} tersimpan!`))

}

const listContact = () => {
    const contacts = loadContact()
    console.log(chalk.cyan.inverse.bold("Daftar Kontak: "))
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.nama} - ${contact.noHP}`)
    })

}

module.exports = {saveData, loadContact, listContact}