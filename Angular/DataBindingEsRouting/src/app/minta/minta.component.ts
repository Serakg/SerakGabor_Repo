import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minta',
  templateUrl: './minta.component.html',
  styleUrls: ['./minta.component.css']
})
export class MintaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  keszito:string = "Serák Gábor";
  utvonal:string = "https://angular.io/";

  uzenet():void{
    alert("Ez egy event handler-es függvény");
  }


  modosito():void{
    this.keszito = "Minta Márton";
  }


  aOldal:number = 1;

}
