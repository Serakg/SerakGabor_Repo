var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    var rendezesBeallitasai={valtozas: 1};
    adatbazis.collection("FIFA").find({}, {projection:{_id: 0, csapat: 1, valtozas: 2}}).sort(rendezesBeallitasai).limit(1).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
})