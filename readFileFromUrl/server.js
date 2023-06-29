const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const uc = require('upper-case');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    let fileName = path.basename(url.parse(req.url).pathname);
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.write(uc.upperCase('File not found!'));
            return res.end();
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            return res.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
