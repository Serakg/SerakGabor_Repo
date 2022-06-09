var http = require("http");
var elsoModul = require("./elsoNodeModul"); //Modul meghívása

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(elsoModul.NodeKiir());
    res.write("Az aktuális dátum: " + elsoModul.aktDatum());
    res.end();
}).listen(8080);