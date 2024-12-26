const yargs = require("yargs");
const { saveData } = require("./logic");
const { pathLogic } = require("./path");
const {listContact} = require("./logic")


const terminal = () => {
    pathLogic()
    yargs.command({
        command: "add",
        describe: "Tambahkan kontak baru",
        builder: {
            nama: {
                describe: "Nama lengkap",
                demandOption: true,
                type: "string"
            },
            email: {
                describe: "Email",
                demandOption: false,
                type: "string" 
            },
            noHP: {
                describe: "Nomor Handphone",
                demandOption: true,
                type: "string"
            },
        },
        handler(argv) {
            const contact ={
                nama: argv.nama,
                email: argv.email,
                noHP: argv.noHP
            };
    
            saveData(argv.nama, argv.email, argv.noHP)
        }
    }).demandCommand();

    //menampilkan list kontak (nama dan nomor telpon)
    yargs.command({
        command: "list",
        describe: "Tampilkan nama dan nomor handphone",
        handler() {
            listContact()
        }
    })
    
    yargs.parse()

}

module.exports = {terminal}
