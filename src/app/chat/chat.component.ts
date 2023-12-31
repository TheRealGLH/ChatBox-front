import { Component, OnInit } from '@angular/core';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { ChatState } from 'src/models/chat/chat-state';
import { ChatCharacterSelectComponent } from './chat-character-select/chat-character-select.component';
import { CommonModule } from '@angular/common';
import { CharacterService } from 'src/models/character/character-service';
import { WebsocketService } from '../websocket.service';
import { ClientMessageType } from 'src/models/chat/socket-messages/client/client-message-type';
import { ClientMessageSignIn } from 'src/models/chat/socket-messages/client/client-message-login';
import { ServerMessage } from 'src/models/chat/socket-messages/server/server-message';
import { ServerMessageType } from 'src/models/chat/socket-messages/server/server-message-type';
import { ServerMessageLogin } from 'src/models/chat/socket-messages/server/server-message-login';
import { ServerMessageText } from 'src/models/chat/socket-messages/server/server-message-text';
import { ServerMessageDiceResult } from 'src/models/chat/socket-messages/server/server-message-dice';
import { ClientMessagePing } from 'src/models/chat/socket-messages/client/client-message-ping';
import { ClientMessageText } from 'src/models/chat/socket-messages/client/client-message-text';
import { ClientMessageDice } from 'src/models/chat/socket-messages/client/client-message-dice';
import { ChatMessage } from 'src/models/chat/chat-message';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  imports: [ChatMainComponent, ChatCharacterSelectComponent, CommonModule],
})
export class ChatComponent implements OnInit {
  chatState: ChatState = new ChatState();
  selectedChar: any;

  constructor(
    private characterService: CharacterService,
    private websocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.fetchCharacters();
    this.websocketService.connect();
    this.websocketService.messageReceived.subscribe((message: string) => {
      this.handleIncomingMessage(message);
    });
  }

  fetchCharacters(): void {
    this.characterService.readAllUserCharacters().subscribe((characters) => {
      this.chatState.setCharacters(characters);
    });
  }

  selectCharacter(character: any) {
    console.log('Found: ' + character);
    this.selectedChar = character;
    let message = {
      MessageType: ClientMessageType.SignIn,
      CharacterId: character.id,
    } as ClientMessageSignIn;
    let json = JSON.stringify(message);
    this.websocketService.sendMessage(json);
  }

  handleIncomingMessage(json: string) {
    console.debug('Message received: ' + json);
    let incomingMessage = JSON.parse(json) as ServerMessage;
    switch (incomingMessage.MessageType) {
      case ServerMessageType.Pong:
        this.handlePong();
        break;
      case ServerMessageType.SignedIn:
        let signInMessage = JSON.parse(json) as ServerMessageLogin;
        this.handleLoginMessage(signInMessage.Success);
        break;
      case ServerMessageType.Text:
        let textMessage = JSON.parse(json) as ServerMessageText;
        this.handleTextMessage(
          textMessage.MessageContent,
          textMessage.CharacterName
        );
        break;
      case ServerMessageType.DiceResult:
        let diceMessage = JSON.parse(json) as ServerMessageDiceResult;
        this.handleDiceRoll(
          diceMessage.Sides,
          diceMessage.Amount,
          diceMessage.Addition,
          diceMessage.Result,
          diceMessage.CharacterName
        );
        break;
      default:
        console.log("Unknown message type for: "+incomingMessage.MessageType);
        break;
    }
  }

  sendTextMessage(text: string) {
    let message = {
      MessageType: ClientMessageType.Text,
      MessageContent: text,
    } as ClientMessageText;
    let json = JSON.stringify(message);
    this.websocketService.sendMessage(json);
  }

  sendDiceRoll(amount: number, sides: number, addition: number) {
    let message = {
      MessageType: ClientMessageType.Dice,
      Amount: amount,
      Sides: sides,
      Addition: addition,
    } as ClientMessageDice;
    let json = JSON.stringify(message);
    this.websocketService.sendMessage(json);
  }

  sendPing() {
    let message = { MessageType: ClientMessageType.Ping } as ClientMessagePing;
    let json = JSON.stringify(message);
    this.websocketService.sendMessage(json);
  }

  handlePong() {
    console.log('Pong!');
  }

  handleLoginMessage(success: boolean) {
    console.debug("Sign in message w/ state: "+success);
    if (success) this.chatState.signedinCharacter = this.selectedChar;
  }

  handleTextMessage(messageContent: string, characterName: string) {
    this.chatState.addMessage(
      new ChatMessage(Date.now(), messageContent, 'unknown', characterName)
    );
  }

  handleDiceRoll(
    sides: number,
    amount: number,
    addition: number,
    result: number,
    characterName: string
  ) {
    this.chatState.addMessage(
      new ChatMessage(
        Date.now(),
        ' has rolled ' +
          amount +
          'D' +
          sides +
          '+' +
          addition +
          ' for a total of: ' +
          result,
        'unknown',
        characterName
      )
    );
  }
}
