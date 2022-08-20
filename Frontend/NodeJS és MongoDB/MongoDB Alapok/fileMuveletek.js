var fileMuveletek = require("fs");

// appendFile - Új file létrehozása
fileMuveletek.appendFile("letrehozottFile.txt", "NodeJS fájl létrehozása teszt!", function(err){
    if (err) throw err;
    console.log("Új file létrehozva!");
})


//open file

fileMuveletek.open("uresFile.txt", "w", function(err){
    if (err) throw err;
    console.log("Üres fájl létrehozva!")
})


//writeFile - Fájl tartalmának felülírása

fileMuveletek.writeFile("ujFile.txt", "Módosítotva a tartalom!", function(err){
    if (err) throw err;
    console.log("Szöveg módosítva!")
})


//rename - Fájl átnevezése

fileMuveletek.rename("ujFile.txt", "atnevezettFile.txt", function(err){
    if (err) throw err;
    console.log("Sikeres fájl átnevezés!");
})


//readFile - Fájl tartalmának megjelenítése webes szerveren

var http = require("http");
http.createServer(function(req,res){
    fileMuveletek.readFile("atnevezettFile.txt", function(err, data){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.write(data);
        return res.end();
    })
}).listen(8080);


//unlink - Kapcsolat törlése node szerverrel

fileMuveletek.unlink("atnevezettFile.txt", function(err){
    if (err) throw err;
    console.log("Törlés kész!")
})