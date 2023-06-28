const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.end(txt);
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
