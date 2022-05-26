import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //IMportáljuk az elemeket

@Component({
  selector: 'app-urlap',
  templateUrl: './urlap.component.html',
  styleUrls: ['./urlap.component.css']
})
export class UrlapComponent implements OnInit {

  form!: FormGroup; //Létrehozunk egy elemet a FormGroup típussal, alapnak üres
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    //Elkészítjük a FormGroup elemünket felépítő szerkezetet
    this.form = this.fb.group({
      dolgozoNev: ["", [Validators.minLength(10), Validators.maxLength(50)]],
      dolgozoEletkor: ["", [Validators.min(18), Validators.max(100)]],
      dolgozoFizetes: ["", [Validators.min(200000), Validators.max(5000000)]],
      dolgozoBeosztas: ["", [Validators.required]]
    });

    this.form.valueChanges.subscribe(console.log);
  }

  //Adattábla elemei:
  DolgozoTombObjektum: Dolgozo[] = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
  },
  {
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
  },
  {
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
  },
  {
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
  },
  {
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
  },
  {
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
  },
  {
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
  } //aktuális objektum vége
  ]

}

export interface Dolgozo {
  nev: string;
  kor: number;
  fizetes: number;
  beosztas: string;
}

