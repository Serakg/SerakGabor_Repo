var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nagyferi:vUgljhcvNXkRAI0e@cluster0.kceb1.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    adatbazis.collection("tesztAdatok").drop(function(err, res){
        if(err) throw err;
        console.log("A collection törlése sikerült!");
        db.close();
    });
});