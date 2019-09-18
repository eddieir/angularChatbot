import { Component, OnInit } from '@angular/core';
import {Signup} from '../models/signup.model';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService : SignupService, private router:Router ) { }

  ngOnInit() {
  }

  signup(name, email, password, verifypassword){
    let signup: Signup = new Signup(name.value, email.value , password.value , verifypassword.value);
    this.signupService.signup(signup).subscribe(res =>{
      alert('signup successful');
      console.log(res);
      this.router.navigateByUrl('');
    }, err =>{
      alert('signup failed');
      console.log(err);
    })
    console.log(signup);
  }

}
