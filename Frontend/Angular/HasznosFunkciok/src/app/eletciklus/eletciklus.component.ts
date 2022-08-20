import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-eletciklus',
  templateUrl: './eletciklus.component.html',
  styleUrls: ['./eletciklus.component.css']
})
export class EletciklusComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy {

  valtozo!:string;

  oldalUjraToltes():void{
    window.location.reload();
  }

  constructor() {
    console.log("Constructor lefutása");
  }
  //ngOnInit()
  ngOnInit(): void {
  }

  //ngOnChanges()
  ngOnChanges(): void {
    console.log("ngOnChanges meghívása");
  }


  //ngDoCheck()
  ngDoCheck(): void {
    console.log("ngDoCheck meghívása");
  }


  //ngAfterContentInit()
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit meghívása");
  }


  //ngAfterContentChecked()
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked meghívása");
  }


  //ngAfterViewInit()
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit meghívása")
  }


  //ngAfterViewChecked()
  ngAfterViewChecked(): void {
    console.log("ngAfterViewCheck meghívása");
  }


  //ngOnDestroy()
  ngOnDestroy(): void {
    console.log("ngOnDestroy meghívása");
  }

  KomponensTomb = ["alma", "körte", "barack", "szilva"]
  eletTorles(){
    this.KomponensTomb.splice(0,1);
    console.log(this.KomponensTomb);
  }
}
