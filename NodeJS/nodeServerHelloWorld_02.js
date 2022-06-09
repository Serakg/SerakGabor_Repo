var http = require("http");

var hostCim = "127.0.0.1";
var port = 3000;

var szerver = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
})

szerver.listen(port, hostCim, () => {
    console.log(`A szerver fut az alábbi elérhetőségen: http://${hostCim}:${port}/`)
});