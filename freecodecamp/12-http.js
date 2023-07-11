const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('root page')
    } else if (req.url === '/history') {
        res.end('show history page')
    } else {
        res.end(`
            <h1> 404 </h1>
        `)
    }
})

server.listen(3000)
