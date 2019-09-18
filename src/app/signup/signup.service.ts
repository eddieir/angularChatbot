import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: Http) { }
  public signup(data){
    return this.http.post("http://52.77.53.40:3000/users/register",data);
  }
}
