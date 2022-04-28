// 1. feladat - Diák info

function DiakInfo(nev:string, csoport:number, tipus:boolean):string{

    let type = "";
    if (tipus == true){
        type = " - Junior Frontend"
    }
    else{
        type = " - Webprogramozó"
    }
    return nev + " [Team0" + csoport + "]" + type
}


// 2. feladat - Osztályzat

function SzovegesErtekeles(jegy:number):[string, string]{
    if (jegy == 2){
        return ["Hanyag", "Rossz"];
    }
    else if (jegy == 3){
        return ["Változó", "Változó"];
    }
    else if (jegy == 4){
        return ["Jó", "Jó"];
    }
    else if (jegy == 5){
        return ["Példás", "Példás"];
    }
}


// 3. feladat - 3-mal osztahtó számok listája

function HarommalOszthatokSzama(vizsgaltTomb:Array<number>):number{
    let harommalOszthatok:number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++){
        if (vizsgaltTomb[i] % 3 == 0){
            harommalOszthatok++
        } 
    }
    return harommalOszthatok
}


// 4. feladat - Nyerő számok ismétlés nélkül

function Nyeroszamok(mennyiseg:number, alsoHatar:number, felsoHatar:number):Array<number>{
    let nyeroszamokTomb = [];
    let probalkozasok:number = 0;
    while (probalkozasok < mennyiseg){
        let generaltSzam:number = Math.round(Math.random()*(felsoHatar - alsoHatar) + alsoHatar);
        nyeroszamokTomb.push(generaltSzam);
        probalkozasok++
    }
    return nyeroszamokTomb

}