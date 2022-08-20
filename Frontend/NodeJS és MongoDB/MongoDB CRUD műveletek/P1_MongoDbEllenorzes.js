var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://gabser:Gabor96Serak@cluster1.ujbni.mongodb.net/test";
//Ideiglenes hozzáférés
//Username: nagyferi
//Password: vUgljhcvNXkRAI0e

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("Sikeres csatlakozás!");
    db.close();
})