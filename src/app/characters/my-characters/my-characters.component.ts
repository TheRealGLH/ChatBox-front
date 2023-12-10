import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NewCharacterComponent } from '../new-character/new-character.component';
import { Character } from 'src/models/character/character';
import { CharacterService } from 'src/models/character/character-service';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from 'src/app/generic/dialog-confirm/dialog-confirm.component';
import { CharacterSubmission } from 'src/models/character/character-submission';

@Component({
  selector: 'app-my-characters',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    MatDialogModule,
    CommonModule,
  ],
  templateUrl: './my-characters.component.html',
  styleUrl: './my-characters.component.css',
})
export class MyCharactersComponent implements OnInit {
  longText: String =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
    'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
    'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
    'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
    'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  characters: Character[] = [];

  constructor(
    public dialog: MatDialog,
    private characterService: CharacterService
  ) {}
  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.characterService.readAllUserCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  openDeleteCharDialog(characterId: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: {
        title: 'Delete?',
        subtitle:
          'Are you sure you want to delete this character? This cannot be undone',
        swapButtons: true,
      },
    });

    dialogRef.beforeClosed().subscribe((wasConfirmed) => {
      console.log(`Dialog result: ${wasConfirmed}`);
      if (wasConfirmed) {
        this.characterService.deleteCharacter(characterId).subscribe(() => {
          this.fetchCharacters();
        });
      }
    });
  }

  openNewCharDialog() {
    const dialogRef = this.dialog.open(NewCharacterComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      let charSubmission: CharacterSubmission = result as CharacterSubmission;
      if (charSubmission != undefined) {
        this.characterService
          .addCharacter(charSubmission)
          .subscribe((resultId) => {
            console.debug('Submitted id: ' + resultId);
            this.fetchCharacters();
          });
      }
    });
  }
}
