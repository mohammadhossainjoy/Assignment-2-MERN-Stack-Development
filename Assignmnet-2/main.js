const http = require('http');
const fs = require('fs');



var server = http.createServer(function (req, res) {
    
    if (req.url == "/") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write('<h1>This is Home Page</h1>')
        res.end();
    
    } else if (req.url == "/about") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write('<h1>This is About Page</h1>')
        res.end();
    
    
    } else if (req.url == "/contact") {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    
    
    } else if (req.url == "/file-write") {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) throw err;
            console.log('File "demo.txt" created and text written successfully.');
        });
        res.write('File "demo.txt" created and text written successfully.');
        res.end();

  }
  


   

}).listen(5500, function () {
    console.log("Server Running...")
})





