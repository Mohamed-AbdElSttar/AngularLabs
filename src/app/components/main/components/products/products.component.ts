import { IProduct } from './../../../../model/interfaces/iproduct';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  products:IProduct[];
  filteredProducts:IProduct[];
  totalPriceToPay=0;
  @Input() selectedCatId:number;
  @Input() isPurshausedInChild:boolean;
  @Output() public totalPriceToParent = new EventEmitter<number>();

  constructor(private _prdServ:ProductService, private _router:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.filteredProducts = this._prdServ.getProductsByCatID(this.selectedCatId)
  }

  ngOnInit(): void {
    this.products = this._prdServ.getAllProducts();

  }

  // getProductsByCatID():IProduct[]{
  //   return this.products.filter((prd)=>{
  //     return prd.categoryId==this.selectedCatId;
  //   });
  // }

  TotalPrice(price:number,count:number){
    this.totalPriceToPay+=price*count;
    this.totalPriceToParent.emit(this.totalPriceToPay);
  }

  ShowMore(pid){
    this._router.navigate(['/product',pid])
  }
}
