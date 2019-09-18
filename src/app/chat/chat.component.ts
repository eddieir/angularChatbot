import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message.model';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  constructor(private chatService : ChatService) { }

  ngOnInit() {
    let message = new Message('Welcome to my Chatbot application', 'assets/bot.png', new Date());
    this.messages.push(message);
  }
  sendMessage(message_contanet){
    let message = new Message(message_contanet.value , 'assets/user.png' , new Date())
    this.messages.push(message);
    this.chatService.sendMessage(message_contanet.value).subscribe(res =>{
      let message = new Message(res.result.speech,"assets/bot.png",new Date());
      this.messages.push(message);
      message_contanet.value = "";
    },err =>{
      console.log(err);
    })
    //console.log(message_contanet.value);
  }

}
