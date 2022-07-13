const http = require("http")

const port = 3000

const server = http.createServer((req,res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')

    if(!name){
        res.end('<h1>Preencha o seu nome:</h1> <form method="GET"><input type="text" name="name"/>' +
            '<input type="submit" value="Submit"/> </form>')
    } else{
        res.end(`Seja bem vindo ${name}`)
    }
})

server.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
})