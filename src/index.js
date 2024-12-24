const {saveData} = require('./logic/logic')
const {pathLogic} = require('./logic/path')
const {questionTemplate} = require('./logic/question')

pathLogic()

const mainQuestion = async () => {
    const nama = await questionTemplate("Masukkan nama anda: ")
    const email = await questionTemplate("Masukkan email anda: ")
    const noHP = await questionTemplate("Masukkan nomor telepon anda: ")
    saveData(nama, email, noHP)
}

module.exports = {mainQuestion}