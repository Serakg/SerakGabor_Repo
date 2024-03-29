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


// Prímszám generátor

function PrimGenerator(hatarEgy:number, hatarKetto:number):number{
    let also:number;
    let felso:number;
    if (hatarEgy < hatarKetto) {
        also = hatarEgy;
        felso = hatarKetto;
    }
    else {
        also = hatarKetto;
        felso = hatarEgy;
    }

    let probalkozasokSzama:number = 0;
    let sikeresGeneralas:boolean = false;
    let generaltSzam:number;

    do{
        generaltSzam = Math.round(Math.random()*(felso - also) + also);
        probalkozasokSzama++;
        let oszto:number = 0;
        for (let i = 1; i < generaltSzam; i++)
        {
            if (generaltSzam % i == 0){
                oszto++;
            }
        }
        if (oszto == 2)
        {
            sikeresGeneralas = true
        }
    }while(sikeresGeneralas == false && probalkozasokSzama < 100)
    return generaltSzam;
}



// Univerzális tömb generátor Typescrip-ben

function UniverzalisTombGenerator(meret:number, alsoHatar:number, felsoHatar:number): Array<number>{

    let generaltTommb: Array<number> = [];
    for (let i = 0; i < meret; i++)
    {
        generaltTommb.push(Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar);
    }
    return generaltTommb;
}





// Téglalap kerület, terület függvény Tuple típusú visszatérési értékkel


function teglalapKeruletTeruletTupleFuggveny(a:number, b:number):[number, number]{
    let kerulet:number = 2*(a+b);
    let terulet:number = a*b;
    return [kerulet, terulet];
}


// Összegzés tétele Typescript-ben

function OsszegzesTeteleTS(vizsgaltTomb:Array<number>):number{
    let osszeg:number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++)
    {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}