// 1. feladat - Diák info
function DiakInfo(nev, csoport, tipus) {
    var type = "";
    if (tipus == true) {
        type = " - Junior Frontend";
    }
    else {
        type = " - Webprogramozó";
    }
    return nev + " [Team0" + csoport + "]" + type;
}
// 2. feladat - Osztályzat
function SzovegesErtekeles(jegy) {
    if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 5) {
        return ["Példás", "Példás"];
    }
}
// 3. feladat - 3-mal osztahtó számok listája
function HarommalOszthatokSzama(vizsgaltTomb) {
    var harommalOszthatok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatok++;
        }
    }
    return harommalOszthatok;
}
// 4. feladat - Nyerő számok ismétlés nélkül
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var nyeroszamokTomb = [];
    var probalkozasok = 0;
    while (probalkozasok < mennyiseg) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
        nyeroszamokTomb.push(generaltSzam);
        probalkozasok++;
    }
    return nyeroszamokTomb;
}
