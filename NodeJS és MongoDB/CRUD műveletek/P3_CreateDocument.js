var MongoClient =require('mongodb').MongoClient;
var url="mongodb+srv://nagyferi:vUgljhcvNXkRAI0e@cluster0.kceb1.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis= db.db("mydb");
    var ujAdat={
        termekNeve: "Jázmin rizs",
        arForintban: 600,    
        afa: "27%"
    }
    adatbazis.collection("tesztAdatok").insertOne(ujAdat, function (err, res){
        if(err) throw err;
        console.log("Ez új adatelem beillesztve");
        db.close();
    });
});
