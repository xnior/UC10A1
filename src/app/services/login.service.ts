import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  urllogin = 'http://localhost:3000/login'
  urlsub = 'http://localhost:3000/signup'
  
login(user:Users):Observable<any>{

  return this.httpClient.post(this.urllogin, JSON.stringify(user), {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response'
  });
}
register(user:Users):Observable<any>{

  return this.httpClient.post(this.urlsub,JSON.stringify(user),{
    headers: new HttpHeaders({'Content-Type':'application/json'}),
    observe:'response'
  })
}
  

}
