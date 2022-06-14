var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    // Collection létrehozása rész
    var adatbazis = db.db("mydb");
    var ujAdat = { nev: "Minta Márton", kor: 21 }
    adatbazis.collection("dolgozok").insertOne(ujAdat, function (err, result) {
        if (err) throw error;
        console.log("Új adat feltöltése!")

        // Új Document létrehozása rész vége!
        db.close();
    });
});