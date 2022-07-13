const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
console.log(args)

const name = args['nome']
const prof = args['prof']
//console.log(name, prof)

console.log(`O nome dele é ${name} e a profissão dele é ${prof}`)