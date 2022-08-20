var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    var rendezesBeallitasai={kor: 1};
    adatbazis.collection("Dolgozo").find().sort(rendezesBeallitasai).limit(3).toArray( function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
})