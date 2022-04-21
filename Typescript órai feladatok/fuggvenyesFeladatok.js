// Téglalap kerület + terület
function TeglalapKeruletTerulet(a, b) {
    var kerulet = (2 * a) + (2 * b);
    var terulet = a * b;
    document.write("A téglalap kerülete: " + kerulet);
    document.write("<br>A téglalap területe: " + terulet + "<br>");
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
