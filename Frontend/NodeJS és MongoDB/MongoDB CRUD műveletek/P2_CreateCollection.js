var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis= db.db("mydb");
    adatbazis.createCollection("tesztAdatok", function(err, res){
        if(err) throw err;
        console.log("Sikeres adatbázis művelet: Kollekció[tábla] létrehozva!");
        db.close();
    })
})