import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChatMessage } from 'src/models/chat/chat-message';

@Component({
  selector: 'app-chat-main',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './chat-main.component.html',
  styleUrl: './chat-main.component.css'
})
export class ChatMainComponent {
  @Input() chatMessages: ChatMessage[] = [];
  @Output() messageEvent = new EventEmitter<string>();
  formControlChat = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(1024),
  ]);

  constructor(){
    /*
    for (let index = 0; index < 40; index++) {
      let msg: ChatMessage = new ChatMessage(Date.now(),"Hello, I'm a test message or something", "314154r3eq","Fuckhead");
      this.chatMessages.push(msg);
    }*/
  }

  _sendMessage(message: string){
    this.messageEvent.emit(message);
    this.formControlChat.setValue('');
  }

}
