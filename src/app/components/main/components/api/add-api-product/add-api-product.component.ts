import { ApiProductService } from 'src/app/services/api-product.service';
import { Router } from '@angular/router';
import { ApiProduct } from './../../../../../model/interfaces/api-product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-api-product',
  templateUrl: './add-api-product.component.html',
  styleUrls: ['./add-api-product.component.css']
})
export class AddApiProductComponent implements OnInit {
  product:ApiProduct;
  myForm:FormGroup;
  constructor(private _apiPrdServe:ApiProductService, private _router:Router, private fb:FormBuilder) {
    this.product={
      name:"", description:"", price:null, quantity:null
    };
    this.myForm=this.fb.group({
      formName:['',[Validators.required,Validators.minLength(3)]],
      formDesc:['',[Validators.required,Validators.minLength(15)]],
      formQuntitry:['',[Validators.required,Validators.min(1),Validators.max(this.product.quantity)]],
      formPrice:['',[Validators.required,Validators.min(1)]],
    })
  }
  ngOnInit(): void {
  }
  Add(){
    this.product.name=this.myForm.value.formName;
    this.product.description=this.myForm.value.formDesc;
    this.product.price=this.myForm.value.formPrice;
    this.product.quantity=this.myForm.value.formQuntitry;
    this._apiPrdServe.insertProduct(this.product).subscribe((data)=>{
      this._router.navigateByUrl('/apiProducts');
    },(err)=>{
      console.log(err);
    })
  }
}
