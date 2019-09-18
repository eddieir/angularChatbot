import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  public login(data){
    return this.http.post('http://52.77.55.40:3000/users/login',data);
  }
}
