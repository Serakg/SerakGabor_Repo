var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");    
    var modositandoMinta = { afa: "27%" };
    adatbazis.collection("tesztAdatok").updateMany(modositandoMinta, {$set:{ afa: "20%"}}, function (err, res){
        if(err) throw err;
        console.log("Adatok módosításra kerültek");
        db.close();
    })
})