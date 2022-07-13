//nome

console.log(process.argv)

const args = process.argv.slice(2)
const nome = args[0].split('=')[1]
const idade = args[1].split('=')[1]

console.log(`O nome dele é ${nome} e a sua idade é ${idade}`)