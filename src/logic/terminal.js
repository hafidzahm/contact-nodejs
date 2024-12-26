const yargs = require("yargs");
const { saveData, listContact, detailContact, deleteContact } = require("./logic");
const { pathLogic } = require("./path");


const terminal = () => {
    //pengecekan direktori
    pathLogic()

    //menambahkan kontak baru
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

    //menampilkan detail kontak
    yargs.command({
        command: "detail",
        describe: "Tampilkan detail sebuah kontak berdasarkan nama",
        builder: {
            nama: {
                describe: "Nama lengkap",
                demandOption: true,
                type:"string"
            },
        },

        handler(argv) {
            detailContact(argv.nama)
        }
    })

    //menghapus kontak berdasarkan nama
    yargs.command({
        command: "remove",
        describe: "Menghapus sebuah kontak berdasarkan nama",
        builder: {
            nama: {
                describe: "Nama lengkap",
                demandOption: true,
                type:"string"
            },
        },

        handler(argv) {
            deleteContact(argv.nama)
        }
    })
    
    yargs.parse()

}

module.exports = {terminal}
