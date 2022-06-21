var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nagyferi:vUgljhcvNXkRAI0e@cluster0.kceb1.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    var rendezesBeallitasai={termekNeve: -1};
    //1 esetén a sorrend növekvő ASCENDING
    //-1 esetén a sorrend csökkenő DESCENDING
    //Üres sort() esetén az alapértelmezett feltöltési sorrendet kapjuk vissza
    adatbazis.collection("tesztAdatok").find().sort(rendezesBeallitasai).toArray( function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
})