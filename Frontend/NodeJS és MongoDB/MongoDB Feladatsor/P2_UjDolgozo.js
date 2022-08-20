var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis= db.db("mydb");
    var ujAdat={
        nev:"Szikla Szilárd",
        kor: 60,
        fizetes: 5000000,    
        beosztas: "Tulajdonos"
    }
    adatbazis.collection("Dolgozo").insertOne(ujAdat, function (err, res){
        if(err) throw err;
        console.log("Ez új adatelem beillesztve");
        db.close();
    });
});
