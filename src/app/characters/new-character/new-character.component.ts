import { Component } from '@angular/core';
import { CharacterGenders } from 'src/models/character/character-gender';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent {
  characterGender: CharacterGenders = new CharacterGenders;

}
