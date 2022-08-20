// Téglalap kerület + terület
function TeglalapKeruletTerulet(a, b) {
    var kerulet = (2 * a) + (2 * b);
    var terulet = a * b;
    document.write("A téglalap kerülete: " + kerulet);
    document.write("A téglalap területe: " + terulet);
}
// PárosE a szám függvény
function ParosE(szam) {
    if (szam % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// Prímszám generátor
function PrimGenerator(hatarEgy, hatarKetto) {
    var also;
    var felso;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    var generaltSzam;
    do {
        generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        var oszto = 0;
        for (var i = 1; i < generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
    } while (sikeresGeneralas == false && probalkozasokSzama < 100);
    return generaltSzam;
}
// Univerzális tömb generátor Typescrip-ben
function UniverzalisTombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTommb = [];
    for (var i = 0; i < meret; i++) {
        generaltTommb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTommb;
}
// Téglalap kerület, terület függvény Tuple típusú visszatérési értékkel
function teglalapKeruletTeruletTupleFuggveny(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    return [kerulet, terulet];
}
// Összegzés tétele Typescript-ben
function OsszegzesTeteleTS(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}
