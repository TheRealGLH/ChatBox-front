import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from 'src/models/character/character';

@Component({
  selector: 'app-chat-character-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-character-select.component.html',
  styleUrl: './chat-character-select.component.css'
})
export class ChatCharacterSelectComponent {
  @Input() characters: Character[] = [];
}
