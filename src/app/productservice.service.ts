import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) { }

  getProudctInfo() : Observable<Product[]>
  {

   return this.http.get<Product[]>
   ("https://fakestoreapi.com/products");

  }

  
}
