const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('Here is our short history')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        `)
    }
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....')
    }
)