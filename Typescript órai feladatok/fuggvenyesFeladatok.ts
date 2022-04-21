export{};


// Téglalap kerület + terület

function TeglalapKeruletTerulet(a:number, b:number):void{
    let kerulet = (2*a) + (2*b);
    let terulet = a*b;
    document.write("A téglalap kerülete: " + kerulet);
    document.write("A téglalap területe: " + terulet);
}


// PárosE a szám függvény

function ParosE (szam:number):boolean{
    if (szam % 2 == 0){
        return true
    }
    else{
        return false
    }
}