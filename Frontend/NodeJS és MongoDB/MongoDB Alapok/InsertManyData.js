var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    // Collection létrehozása rész
    var adatbazis = db.db("mydb");
    var ujAdatok = [{ nev: "Alk Aida", kor: 20 },
    { nev: "Békés Csaba", kor: 68 },
    { nev: "Koax Ábel", kor: 30 }];
    adatbazis.collection("dolgozok").insertMany(ujAdatok, function (err, result) {
        if (err) throw error;
        console.log("Új adat sorok feltöltése sikeres!")

        // Új Document létrehozása rész vége!
        db.close();
    });
});