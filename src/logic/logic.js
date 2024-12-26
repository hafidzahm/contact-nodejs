const fs = require("fs")

const saveData = (nama, email, noHP) => {
    const contact = {nama, email, noHP}
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')

    const contacts = JSON.parse(fileBuffer)

    //verify-first
    const duplicateData = contacts.find((contact) => contact.nama === nama)
    if (duplicateData) {
        console.log("Kontak sudah terdaftar")
    return false
    }


    contacts.push(contact)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))

    console.log("Terima kasih sudah menyimpan kontak")

}

module.exports = {saveData}