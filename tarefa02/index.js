const chalk = require("chalk")
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'name',
        message: 'Qual é o seu nome?'
    },
    {
        name: 'idade',
        message: 'Quantos anos você tem?'
    }]).then((answers) => {
        if(!answers.nome || answers.idade){
            throw new Error("Você não informou o seu nome ou a sua idade.")
        }
        console.log(chalk.bgYellow.black(`O nome do usuário é ${answers.name} e a sua idade é ${answers.idade} `))
}).catch((err) => console.log(err))