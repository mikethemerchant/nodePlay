const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        return res.end();
    });
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
