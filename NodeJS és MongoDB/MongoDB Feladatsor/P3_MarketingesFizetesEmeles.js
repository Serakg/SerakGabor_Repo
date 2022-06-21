var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var adatbazis = db.db("mydb");
    adatbazis.collection("Dolgozo").updateOne({ beosztas: "Marketing Manager" }, { $set: { fizetes: 10000000 } }, function (err, result) {
        if (err) throw err;
        console.log("Adatok módosítva!");
        db.close();
    });
}); 