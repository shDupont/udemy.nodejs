const http = require("http")
const port = 3000
const server = http.createServer((req,res) => {
    res.write("hello world http")
    res.end()
})

server.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
})