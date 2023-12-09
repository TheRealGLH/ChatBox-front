import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NewCharacterComponent } from '../new-character/new-character.component';

@Component({
  selector: 'app-my-characters',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatTooltipModule, RouterModule, MatDialogModule],
  templateUrl: './my-characters.component.html',
  styleUrl: './my-characters.component.css'
})
export class MyCharactersComponent {

  longText: String = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "+
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim "+
  "ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "+
  "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate "+
  "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat "+
  "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  constructor(public dialog: MatDialog){

  }


  openNewCharDialog() {
    const dialogRef = this.dialog.open(NewCharacterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
