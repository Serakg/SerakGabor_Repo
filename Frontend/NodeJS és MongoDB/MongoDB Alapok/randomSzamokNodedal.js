var fileMuveletek = require('fs');

//Tíz random szám generáló függvény
function SzamGenerator() {
    let szamTomb = [];
    for (let i = 0; i < 10; i++) {
        let randomSzam = Math.round(Math.random() * 100);
        szamTomb.push(randomSzam);
    }
    return szamTomb;
}
/*
fileMuveletek.appendFile('randomSzamok.txt',SzamGenerator().join(), function (err) {
    if(err) throw err;
    console.log("Fájl random számokkal feltöltve");
  });
*/
  fileMuveletek.writeFile('randomSzamok.txt',SzamGenerator().join(), function (err) {
    if(err) throw err;
    console.log("A fájl 10 random számokkal feltöltve");
  });