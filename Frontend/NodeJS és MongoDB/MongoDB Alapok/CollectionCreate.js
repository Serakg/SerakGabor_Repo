var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    // Collection létrehozása rész
    var adatbazis = db.db("mydb");
    adatbazis.createCollection("dolgozok", function (err, result) {
        if (err) throw error;
        console.log("Kollekció létrehozása");
        // Collection létrehozás vége
        db.close();

    })
})

