import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Character } from 'src/models/character/character';

@Component({
  selector: 'app-chat-character-select',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './chat-character-select.component.html',
  styleUrl: './chat-character-select.component.css'
})
export class ChatCharacterSelectComponent {
  @Input() characters: Character[] = [];
}
