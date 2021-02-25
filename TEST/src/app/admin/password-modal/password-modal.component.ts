import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss']
})
export class PasswordModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PasswordModalComponent>) {}
  
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  

}
