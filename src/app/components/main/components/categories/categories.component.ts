import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/model/interfaces/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit,AfterViewInit {
  categories:ICategory[];
  catId:number;
  logo:string;
  totalPriceInCats:number;
  discount:boolean;
  name:string;
  clientName:string;
  @ViewChild('sCatId') elm:ElementRef;
  isPurshaused:boolean;


  constructor() {
    this.name = "ITI Company";
    this.totalPriceInCats=0;
    this.categories=[{id:1,name:"Mobiles"},{id:2,name:"Tablets"},{id:3,name:"Laptops"}]
    this.discount = false;
    this.logo = "assets/ITI logo.png";
    this.clientName = "Ahmed Ali";
    this.isPurshaused = false;
  }
  ngAfterViewInit(): void {
    this.elm.nativeElement.style.color="red";
  }

  ngOnInit(): void {
  }

  hideTable(){
    this.isPurshaused = true;
  }
  newTrade(){
    this.isPurshaused = false;
  }

  CalTotalAfterDisCount(total:number){
    this.totalPriceInCats=total;
  }
}
