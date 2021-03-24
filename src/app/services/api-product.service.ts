import { ApiProduct } from './../model/interfaces/api-product';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private _http:HttpClient) { }
  getAllProducts():Observable<ApiProduct[]>{
    return this._http.get<ApiProduct[]>(`${environment.ApiUrl}/products`);
  }

  getProductById(_id:number):Observable<ApiProduct>{
    return this._http.get<ApiProduct>(`${environment.ApiUrl}/product/${_id}`);
  }

  insertProduct(prd:ApiProduct):Observable<ApiProduct>{
    const httpOptions = {headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    })};
    return this._http.post<ApiProduct>(`${environment.ApiUrl}/product/`,prd,httpOptions);
  }
}
