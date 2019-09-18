import { Component, OnInit } from '@angular/core';
import {Login} from '../models/login.model';
import { LoginService } from '../services/login/login.service';
import { ChatComponent } from '../chat/chat.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService , private router:Router) { }

  ngOnInit() {
  }

  login(username,password){
    console.log(username.value);
    console.log(password.value);
    let login = new Login(username.value , password.value);
    this.loginService.login(login).subscribe(res => {
      console.log(res);
      alert('login successful');
      this.router.navigateByUrl('chat');
    }, err => {
      console.log(err);
      alert('login failed');
    });
    //console.log(login);
  }

}

