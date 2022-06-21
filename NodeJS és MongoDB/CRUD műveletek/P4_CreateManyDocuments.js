var MongoClient =require('mongodb').MongoClient;
var url="mongodb+srv://nagyferi:vUgljhcvNXkRAI0e@cluster0.kceb1.mongodb.net/test";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var adatbazis= db.db("mydb");
    var ujAdatok=[{
        termekNeve: "Banán",
        arForintban: 400,    
        afa: "27%"
    },
    {
        termekNeve: "Zero-Cola",
        arForintban: 500,    
        afa: "27%"
    },
    {
        termekNeve: "Kenyér",
        arForintban: 400,    
        afa: "5%"
    },
    {
        termekNeve: "Tej",
        arForintban: 250,    
        afa: "5%"
    }];
    adatbazis.collection("tesztAdatok").insertMany(ujAdatok, function (err, res){
        if(err) throw err;
        console.log("Új adatok feltöltve!");
        db.close();
    });
});