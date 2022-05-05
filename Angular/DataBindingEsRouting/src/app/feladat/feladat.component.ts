import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  kepHelye:string = "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png";
  kepCime:string = "Angular Logo";
  kepMeret:string = "100";


  kepModosito():void{
    this.kepHelye = "https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg";
    this.kepCime = "React Logo";
    this.kepMeret = "200";
  }


  aOldalMerete:number = 1;
  bOldalMerete:number = 1;

}
