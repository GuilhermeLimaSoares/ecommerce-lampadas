import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

import { MAIN_API } from './../app/app.api'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products = new BehaviorSubject(undefined);

  constructor(private http: Http) { }

  // public getCategory(products, product): Observable<Product[]> {
  //    return products.filter((response) => {
  //     return response.category === product;
  //   });
  // }

  public getProducts(): Observable<Product[]> {
    return this.http.
      get(`${MAIN_API}/products`, {params: {}})
      .map(response => response.json());
  }

  public showProducts(data){
    this.products.next(data);
  }

} 
