var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto() {
    }
    return Auto;
}());
var ujAuto = new Auto(); // Osztály példányosítása ujAuto néven
ujAuto.marka = "TESLA"; // Példányosított osztály marka tulajdonságának beállítása "TESLA" értékre
var Szemely = /** @class */ (function () {
    // Konstruktor
    function Szemely(nevErtek) {
        this.nev = nevErtek;
    }
    // Metódus
    Szemely.prototype.dolgozik = function () {
        console.log(this.nev + "munkába megy...");
    };
    return Szemely;
}());
var ujEmber = new Szemely("Józsi");
console.log(ujEmber.nev);
ujEmber.dolgozik();
var Dolgozo = /** @class */ (function (_super) {
    __extends(Dolgozo, _super);
    function Dolgozo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dolgozo.prototype.dolgozik = function () {
        console.log(this.nev + "frontendes munkahelyre megy....");
    };
    return Dolgozo;
}(Szemely));
var ujDolgozo = new Dolgozo("Lajos");
console.log(ujDolgozo.nev);
ujDolgozo.dolgozik();
