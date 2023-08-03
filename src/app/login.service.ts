import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  
  constructor(private http: HttpClient) { }

  loginInfo(data:LoginRequest) : Observable<LoginResponse>
  {

   return this.http.post<LoginResponse>
   ("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data);

  }
}
