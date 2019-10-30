var http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Content-Type', 'application/json');
    let rawdata = fs.readFileSync('data.json');
    let allContent = JSON.parse(rawdata);

    var q = url.parse(req.url, true);
    if ("/get_init_style" == q.pathname){
        res.end(JSON.stringify(allContent.modelPart));
    }
    if ("/a" == q.pathname) {
        res.end(JSON.stringify(allContent.items));
    }
    if ("/b" == q.pathname) {
        res.end(JSON.stringify(allContent.categories));
    }
    
}).listen(8080); 