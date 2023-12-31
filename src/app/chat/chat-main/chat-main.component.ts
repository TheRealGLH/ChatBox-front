import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChatMessage } from 'src/models/chat/chat-message';

@Component({
  selector: 'app-chat-main',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './chat-main.component.html',
  styleUrl: './chat-main.component.css'
})
export class ChatMainComponent {
  @Input() chatMessages: ChatMessage[] = [];

  constructor(){
    /*
    for (let index = 0; index < 40; index++) {
      let msg: ChatMessage = new ChatMessage(Date.now(),"Hello, I'm a test message or something", "314154r3eq","Fuckhead");
      this.chatMessages.push(msg);
    }*/
  }

}
