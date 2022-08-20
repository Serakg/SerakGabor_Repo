// Visszatérési érték és paraméter nélküli eljárás

function ILoveTypeScript():void{
    document.write("Szeretem a TypeScriptet!");
}


//  Visszatérési érték nélküli és paraméteres eljárás

function NegyzetKeruletTeruletEljaras(a:number):void{
    let kerulet = 4*a;
    let terulet = a*a;
    document.write("<br>Az " + a + "oldalú négyzet kerülete: " + kerulet);
    document.write("<br>Az " + a + "oldalú négyzet területe: " + terulet);
}


// Visszatérési értékes és paraméter nélküli függvény

function RandomGeneralo100Fuggveny():number{
    return Math.round(Math.random()*100);
}


// Visszatérési értékes és paraméteres függvény


function NegyzetKeruletFuggveny(a:number):number{
    return 4*a;
}