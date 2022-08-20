//1. lépés - szükésges package telepítések

// npm install express
// npm install ejs
// npm install mongoose (MongoDB kezelő)
// npm install -g nodemon


//2. lépés - package importálás

const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();


//3. lépés - view engine meghatározása
app.set("view engine", "ejs");



//4. lépés - MongoDB szerverhez való csatlakozás
const username="gabser";
const password="Gabor96Serak";
const cluster="cluster1.ujbni";
const dbname="mydb";
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);



//5. lépés - séma készítése


const FifaCsapat = {
    csapat:String,
    helyzes:Number,
    valtozas:Number,
    pontszam:Number
}



//6. lépés - Adatszerkezet (model) megadása mongoose-nak, kollekcióval együtt


const FifaInfo = mongoose.model("FIFA", FifaCsapat,"FIFA" )



//7. lépés - Visszaellenőrzése a db csatlakozásnak


app.get("/", function(req,res){
    res.send("Az express működik");

    //8+1. lépés

    FifaInfo.find({}, function(err, csapatok){
        res.render('index',{
            csapatLista:csapatok
        });
    });
});



//8. lépés - Port meghatározása és visszajelzés


app.listen(3300, function(){
    console.log("A szerver az alábbi linken érhető el: http://localhost:3300");
})