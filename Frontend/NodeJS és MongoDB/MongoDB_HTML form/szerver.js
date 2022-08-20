const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

//MongoDB szerverhez való csatlakozás
const username="nagyferi";
const password="vUgljhcvNXkRAI0e";
const cluster="cluster0.kceb1";
const dbname="mydb";
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);


//Adatszerkezet Modell létrehozása: Séma
const Dolgozo={
    nev:String,
    kor:Number,
    fizetes:Number,
    beosztas:String
}

//Kollekció kiválasztása
var kollekcioNeve="Dolgozo";
const DolgozoInfo=mongoose.model("Dolgozo",Dolgozo, kollekcioNeve);
//mongoose.model(KollekcioNeve,ModellNeve);


//Visszajelzés küldése
app.get("/",function(req, res){
    //res.send("Az express működik");
    res.sendFile(__dirname+"/index.html");
});

//Adatok feltöltése : POST 
app.post("/", function(req, res){
    let ujDolgozo=new DolgozoInfo({
        nev: req.body.nev,
        kor: req.body.kor,
        fizetes:req.body.fizetes,
        beosztas:req.body.beosztas
    });
    ujDolgozo.save();
    res.redirect("/");//Visszatér az eredeti feltöltő form felületre
});

//Portra való csatlakozás
app.listen(3000, function(){
    console.log("A szerver a 3000-es porton fut!")
});