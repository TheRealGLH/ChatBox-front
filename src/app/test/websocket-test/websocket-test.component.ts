import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { WebsocketService } from 'src/app/websocket.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-websocket-test',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './websocket-test.component.html',
  styleUrl: './websocket-test.component.css'
})
export class WebsocketTestComponent implements OnInit {

  receivedMessages: string[] = [];

  constructor(private websocketService: WebsocketService) {

  }

  ngOnInit(): void {
    this.websocketService.connect();
    this.websocketService.messageReceived.subscribe((message: string) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage(): void {
    const message = "{'messageType': 'Ping'}";
    console.log(message)
    this.websocketService.sendMessage(message);
  }

}
