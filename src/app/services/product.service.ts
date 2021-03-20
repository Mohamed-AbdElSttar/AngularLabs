import { IProduct } from './../model/interfaces/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:IProduct[];
  constructor() {
    this.products = [
      {id:1,name:"Realme 6",price:400,quntatity:3,img:"assets/realme6.jpg", categoryId:1},
      {id:5,name:"Realme 6 Pro",price:450,quntatity:1,img:"assets/realme6-pro.jpg", categoryId:1},
      {id:8,name:"Dell Inspiron 15R 3593",price:800,quntatity:0,img:"assets/Dell-Inspiron-15r-3593.jpg", categoryId:3},
      {id:9,name:"Dell Inspiron 15R 5537",price:950,quntatity:2,img:"assets/Dell-Inspiron-15r-5537.jpg", categoryId:3},
      {id:10,name:"Realme Watch",price:100,quntatity:1,img:"assets/realme-watch.jpg", categoryId:1},
    ];
   }

   getAllProducts():IProduct[]{
    return this.products;
  }
  getProductsByCatID(catID:number):IProduct[]{
    return this.products.filter(prd=>prd.categoryId==catID);
  }

  getProductById(pid):IProduct{
    return this.products.find(prd=>prd.id==pid)
  }
}
