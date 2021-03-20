import { Component, OnInit } from '@angular/core';
import { ApiProduct } from 'src/app/model/interfaces/api-product';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-api-products',
  templateUrl: './api-products.component.html',
  styleUrls: ['./api-products.component.css']
})
export class ApiProductsComponent implements OnInit {
  products:ApiProduct[];

  constructor(private _apiPrdServ:ApiProductService) { }

  ngOnInit(): void {
    this._apiPrdServ.getAllProducts().subscribe((res)=>{
      this.products=res;
    }, (err)=>{
      console.log(err);
    });
  }

}
