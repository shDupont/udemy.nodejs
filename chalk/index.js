const chalk = require("chalk")

const nota = 5

if(nota > 6){
    console.log(chalk.green("Parabéns você foi aprovado"))
} else {
    console.log(chalk.bgMagenta.black("Você precisa fazer a prova de recuperação"))
}
