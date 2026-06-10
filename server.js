const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const m = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.svg':'image/svg+xml','.json':'application/json','.xml':'text/xml','.ico':'image/x-icon'};
http.createServer((req,res)=>{
  let f = req.url==='/'?'index.html':req.url.slice(1);
  try {
    let c = fs.readFileSync(path.join(dir, f));
    let ext = path.extname(f);
    res.writeHead(200,{'Content-Type': m[ext]||'text/plain','Access-Control-Allow-Origin':'*'});
    res.end(c);
  } catch(e) {
    res.writeHead(404);
    res.end('Not found: ' + f);
  }
}).listen(8080, '0.0.0.0', () => console.log('OK'));
