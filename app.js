const http = require('http');

function server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);