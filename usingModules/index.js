const fs = require('fs') //fle system

fs.readFile('text.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
})