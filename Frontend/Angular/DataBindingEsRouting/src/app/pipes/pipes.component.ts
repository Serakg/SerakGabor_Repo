import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  mintaSzoveg:string = "Angular nyelvben használt pipe-ok";
  valosSzam:number = 5.123;
  szazalekosErtek:number = 0.85456;
  penzErtek:number = 100.123;
  datumErtek:number = Date.now()

  constructor() { }

  ngOnInit(): void {
  }

}
