const yargs = require("yargs");
const { saveData } = require("./logic");
const { pathLogic } = require("./path");

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
    
    yargs.parse()

}

module.exports = {terminal}
