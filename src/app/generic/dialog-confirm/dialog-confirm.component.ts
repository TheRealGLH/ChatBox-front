import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatDividerModule],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.css',
})
export class DialogConfirmComponent {
  swapButtonImportance: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: DialogConfirmData,
  ) {}
}


export interface DialogConfirmData {
  title: string;
  subtitle: string;
  additionalText: string;
  swapButtons: boolean;
}
