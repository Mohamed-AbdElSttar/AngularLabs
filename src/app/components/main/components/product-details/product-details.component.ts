import { ProductService } from './../../../../services/product.service';
import { IProduct } from './../../../../model/interfaces/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prd:IProduct;
  constructor(private activeRoute:ActivatedRoute, private _prdServ:ProductService, private location:Location) { }

  ngOnInit(): void {
    let id= this.activeRoute.snapshot.params['pid'];
    this.prd=this._prdServ.getProductById(id);
  }

  goBack(){
    this.location.back()
  }
}
