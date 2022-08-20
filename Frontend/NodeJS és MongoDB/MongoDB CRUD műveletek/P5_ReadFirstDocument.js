var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis=db.db("mydb");
    adatbazis.collection("tesztAdatok").findOne({}, function (err, res){
        if(err) throw err;
        console.log("Az első tesztadat elnevezése: "+res.termekNeve);
        console.log("Az első tesztadat ára: "+res.arForintban+" Ft");
        console.log("Az első tesztadat áfakulcsa: "+res.afa);
        db.close();
    })
});