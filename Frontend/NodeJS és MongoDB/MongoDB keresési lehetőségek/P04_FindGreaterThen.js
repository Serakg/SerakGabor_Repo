var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    adatbazis.collection("Dolgozo").find({fizetes:{$gt:200000}}).toArray( function (err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
//Létezik a gte opció is, ami a greater than equal kifejezésből származik ">="- nek felel meg