// Tuple
var tupleMinta;
tupleMinta = ["Kis József", 22];
console.log(tupleMinta[0]);
var kerTerFeladat;
kerTerFeladat = [22, 30];
// Enum
var fizetesTipusok;
(function (fizetesTipusok) {
    fizetesTipusok[fizetesTipusok["juniorFrontend"] = 450000] = "juniorFrontend";
    fizetesTipusok[fizetesTipusok["juniorBackend"] = 500000] = "juniorBackend";
    fizetesTipusok[fizetesTipusok["juniorfullStack"] = 600000] = "juniorfullStack";
    fizetesTipusok[fizetesTipusok["seniorFrontend"] = 900000] = "seniorFrontend";
    fizetesTipusok[fizetesTipusok["seniorBackend"] = 1000000] = "seniorBackend";
    fizetesTipusok[fizetesTipusok["seniorFullStack"] = 1200000] = "seniorFullStack";
})(fizetesTipusok || (fizetesTipusok = {}));
var jozsiFizetes = fizetesTipusok.juniorFrontend;
console.log(jozsiFizetes);
var interfaceObjektum = { nev: "Kis József", eletkor: 22, aktiv: true };
console.log(interfaceObjektum.nev);
console.log(interfaceObjektum.eletkor);
console.log(interfaceObjektum.aktiv);
