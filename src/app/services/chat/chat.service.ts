import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = 'https://api.dialogflow.com/v1/';
  accessToken = 'd88044f214c744bc908405504ef8ac42';

  constructor(private http:Http) { }

  public sendMessage(message: string){
    let data = {
      lang: "en",
      sessionId:"123456",
      query: message
    }
    let headers = new Headers();
    headers.append('Authorization:', 'Bearer' + this.accessToken);
    return this.http.post(this.url, data , {headers:headers}).pipe(map(res =>{
      return res.json()
    }))

  }
}
