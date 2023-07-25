import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './interfaces/comment';
import { User } from './interfaces/user';
import { ProductInfo } from './interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { 

    

  }

  getComments() :Observable<Comment[]> 
  {

    return this.http.get<Comment[]>(`${this.apiUrl}/comments`)
  }

  getUsers() : Observable<User[]>
  {

    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getProduct() : Observable<ProductInfo>
  {
    return this.http.get<ProductInfo>(`https://dummyjson.com/products`);
  }

}
