import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importalas',
  templateUrl: './importalas.component.html',
  styleUrls: ['./importalas.component.css']
})
export class ImportalasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  adatok = [
    "Sumeg, vasutallomas;Sumeg, buszpalyaudvar;1,208;16;6;n",
    "Sumeg, buszpalyaudvar;Mogyorosi-domb, geologiai bemutatohely;1,512;24;8;n",
    "Mogyorosi-domb, geologiai bemutatohely;Sumegi bazaltbanya vasutallomas;1,576;13;43;n",
    "Sumegi bazaltbanya vasutallomas;Sarvaly erdeszhaz, pecsetelohely;2,101;69;18;i",
    "Sarvaly erdeszhaz, pecsetelohely;Leteres a foldutrol a romos vadaszhaznal;4,250;82;66;n",
    "Leteres a foldutrol a romos vadaszhaznal;Kek rom jelzes kezdete Tatika varahoz;2,686;172;29;n",
    "Kek rom jelzes kezdete Tatika varahoz;Hidegkuti major;1,614;9;135;n",
    "Hidegkuti major;Leteres a Sztupahoz;3,903;153;53;n",
    "Leteres a Sztupahoz;Zalaszanto, romai katolikus templom;2,747;14;148;i",
    "Zalaszanto, romai katolikus templom;Leteres az orszagutrol Rezi fele;2,396;26;51;n",
    "Leteres az orszagutrol Rezi fele;Rezi, leteres a pecsetelohelyhez;3,328;112;13;i",
    "Rezi, leteres a pecsetelohelyhez;Gyongyosi csarda;2,535;31;173;i",
    "Gyongyosi csarda;Egregy, arpad-kori templom;5,239;134;109;n",
    "Egregy, arpad-kori templom;Heviz, leteres az autobuszallomashoz;2,595;20;49;i",
    "Heviz, leteres az autobuszallomashoz;Keszthely, Festetics kastely eszaki kapuja;5,114;58;32;n",
    "Keszthely, Festetics kastely eszaki kapuja;Keszthely, leteres a vasutallomashoz;1,820;3;36;i"
  ];

  ObjektumFeltolto(feltoltendoElem:string[]):Kektura[]{
    const beolvasottAdatok:Kektura[] = [];
    for (let i = 0; i < feltoltendoElem.length; i++)
    {
      let daraboltSor:string[] = feltoltendoElem[i].split(";");
      const kekTuraElem:Kektura = new Kektura(daraboltSor[0], daraboltSor[1], Number (daraboltSor[2].replace(",", ".")), Number(daraboltSor[3]), Number(daraboltSor[4]), daraboltSor[5]);
      beolvasottAdatok.push(kekTuraElem);
    }
    return beolvasottAdatok;
  }

  kekturaAdatok = this.ObjektumFeltolto(this.adatok);

}

export interface Utvonal{
  kezdoPont:string;
  vegPont:string;
  tavolsag:number;
  emelkedes:number;
  lejtes:number;
  pecseteloHelyE:string;   
}

export class Kektura implements Utvonal{
  kezdoPont: string;
  vegPont: string;
  tavolsag: number;
  emelkedes: number;
  lejtes: number;
  pecseteloHelyE: string;

  constructor(kezdoPont:string, vegPont:string, tavolsag:number, emelkedes:number, lejtes:number, pecseteloHelyE:string){
    this.kezdoPont = kezdoPont;
    this.vegPont = vegPont;
    this.tavolsag = tavolsag;
    this. emelkedes = emelkedes;
    this.lejtes = lejtes;
    this.pecseteloHelyE = pecseteloHelyE;
  }
}