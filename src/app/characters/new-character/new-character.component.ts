import { Component, ElementRef, ViewChild } from '@angular/core';
import { Character } from 'src/models/character/character';
import { CharacterGenders } from 'src/models/character/character-gender';
import { CharacterService } from 'src/models/character/character-service';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterSubmission } from 'src/models/character/character-submission';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent {
  characterGenders: CharacterGenders = new CharacterGenders();
  characterNew: CharacterSubmission = new CharacterSubmission('Mr. Sex', 0);
  characterCreated: Character | undefined;
  formControlName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]);
  formControlPronouns = new FormControl('', [Validators.maxLength(15)]);
  formControlSpecies = new FormControl('', [Validators.maxLength(15)]);
  formControlBio = new FormControl('', [Validators.maxLength(1024)]);

  constructor(private characterService: CharacterService,
    private router: Router) {}
  add() {
    this.createChar(this.characterNew);
  }

  createChar(character: CharacterSubmission): void {
    character.name = character.name.trim();
    if (!character.name) {
      //TODO: Display error
      return;
    }

    // The server will generate the id for this new hero
    this.characterService
      .addCharacter(this.characterNew)
      .subscribe((character) => {
        this.router.navigate(['character/view/'+character.id])
  })
  }
}
