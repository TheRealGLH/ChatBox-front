import { Component, Inject } from '@angular/core';
import { Character } from 'src/models/character/character';
import { CharacterGenders } from 'src/models/character/character-gender';
import {FormControl, Validators} from '@angular/forms';
import { CharacterSubmission } from 'src/models/character/character-submission';
import { MatDialogRef } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent {
  characterGenders: CharacterGenders = new CharacterGenders();
  characterNew: CharacterSubmission = new CharacterSubmission('Mr. Sex', "he/ him", "Human", "He is invincible.");
  characterCreated: Character | undefined;
  formControlName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]);
  formControlPronouns = new FormControl('', [Validators.maxLength(15)]);
  formControlSpecies = new FormControl('', [Validators.maxLength(15)]);
  formControlBio = new FormControl('', [Validators.maxLength(1024)]);

  constructor(
    public dialogRef: MatDialogRef<CharacterSubmission>,
    @Inject(DIALOG_DATA) public data: DialogCharacterData,
  ) {}


  attemptAdd(): void{
    if(this.formControlBio.valid &&
      this.formControlPronouns.valid &&
      this.formControlName.valid &&
      this.formControlSpecies.valid
      ){
        this.dialogRef.close(new CharacterSubmission(
          "Mr. Test",
          "he/ him",
          "Human",
          "He has a long history."
        ));
    }
  }



}

export interface DialogCharacterData {
  characterSubmission: CharacterSubmission;
}
