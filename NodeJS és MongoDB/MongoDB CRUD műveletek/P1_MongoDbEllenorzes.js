var MongoClient =require('mongodb').MongoClient;
var url="mongodb+srv://nagyferi:vUgljhcvNXkRAI0e@cluster0.kceb1.mongodb.net/test";
//Ideiglenes hozzáférés
//Username: nagyferi
//Password: vUgljhcvNXkRAI0e

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("Sikeres csatlakozás!");
    db.close();
})