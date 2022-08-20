var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    var torlesiMinta={ termekNeve: "Jázmin rizs"};
    adatbazis.collection("tesztAdatok").deleteOne(torlesiMinta, function(err, res){
        if(err) throw err;
        console.log("Az adat törlése sikerült!");
        db.close();
    });
});