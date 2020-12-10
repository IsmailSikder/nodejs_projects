var http = require('http');

http.createServer(function(reqest,response){
    response.writeHead(200, {'content-type':'text/plain'});
    response.write('Hello NodeJs World!');
    response.end()
}).listen(8081);

console.log('Server Running: ', 'http://127.0.0.1:8081');