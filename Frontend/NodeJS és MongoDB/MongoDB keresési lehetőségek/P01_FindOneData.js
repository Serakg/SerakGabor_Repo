var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    adatbazis.collection("Dolgozo").findOne({}, function (err, res){
        if(err) throw err;
        console.log("Az első dolgozó neve: "+res.nev);
        console.log("Az első dolgozó életkora: "+res.kor+" év");
        console.log("Az első dolgozó fizetése: "+res.fizetes);
        db.close();
    })
});