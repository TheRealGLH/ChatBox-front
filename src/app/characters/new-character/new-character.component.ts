import { Component, ElementRef, ViewChild } from '@angular/core';
import { Character } from 'src/models/character/character';
import { CharacterGenders } from 'src/models/character/character-gender';
import { CharacterService } from 'src/models/character/character-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent {
  characterGenders: CharacterGenders = new CharacterGenders();
  characterNew: Character = new Character('Mr. Sex', 0);
  id: string = '';

  constructor(private characterService: CharacterService) {}

  add() {
    //console.log(this.characterNew);
    this.createChar(this.characterNew);
  }

  createChar(character: Character): void {
    character.name = character.name.trim();
    if (!character.name) {
      //TODO: Display error
      return;
    }

    // The server will generate the id for this new hero
    this.characterService
      .addCharacter(this.characterNew)
      .subscribe((returnedId) => this.id);
    console.log(this.id);
  }
}
