import { ApiProduct } from './../../../../../model/interfaces/api-product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-api-product-details',
  templateUrl: './api-product-details.component.html',
  styleUrls: ['./api-product-details.component.css']
})
export class ApiProductDetailsComponent implements OnInit {
  product:ApiProduct=null;
  constructor(private apiPrdServe:ApiProductService,private activedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.activedRoute.snapshot.params["id"];
    this.apiPrdServe.getProductById(id).subscribe((res) => {
      this.product = res;
    }, (err) => {
      console.log(err);
    });
  }

}
