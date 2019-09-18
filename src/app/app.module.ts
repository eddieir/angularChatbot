import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './services/login/login.service';
import { HttpModule } from '@angular/http';
import { SignupService } from './signup/signup.service';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './services/chat/chat.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpModule
  ],
  providers: [LoginService, SignupService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
