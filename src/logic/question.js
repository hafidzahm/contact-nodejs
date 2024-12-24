const readline = require("readline");
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

//bikin template pertanyaan
const questionTemplate = (question) => {
    return new Promise((resolve, reject) => {
         rl.question(question, (answer) => {
             resolve(answer)
             
           });
     })
 }

 module.exports = {questionTemplate}