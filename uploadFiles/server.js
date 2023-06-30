import http from 'node:http';
import formidable, {errors as formidableErrors} from 'formidable';

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
    // parse a file upload
    const form = formidable({});
    let fields;
    let files;
    try {
        // this gets those files and saves them in the temp folder
        [fields, files] = await form.parse(req);
    } catch (err) {
        console.error(err);
        res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ fields, files }, null, 2));
    return;
  }

  // show a file upload form
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/ ...');
});