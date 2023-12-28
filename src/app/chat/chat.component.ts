import { Component, OnInit } from '@angular/core';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { ChatState } from 'src/models/chat/chat-state';
import { ChatCharacterSelectComponent } from './chat-character-select/chat-character-select.component';
import { CommonModule } from '@angular/common';
import { Character } from 'src/models/character/character';
import { CharacterService } from 'src/models/character/character-service';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  imports: [ChatMainComponent, ChatCharacterSelectComponent, CommonModule],
})
export class ChatComponent implements OnInit {
  chatState: ChatState = new ChatState();

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.characterService.readAllUserCharacters().subscribe((characters) => {
      this.chatState.setCharacters(characters);
    });
  }
}
