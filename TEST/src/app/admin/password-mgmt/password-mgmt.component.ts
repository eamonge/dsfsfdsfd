import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PasswordModalComponent } from '../password-modal/password-modal.component';

@Component({
  selector: 'app-password-mgmt',
  templateUrl: './password-mgmt.component.html',
  styleUrls: ['./password-mgmt.component.scss']
})
export class PasswordMgmtComponent implements OnInit {

  currentDate: Date;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.currentDate = new Date();
  }

  selectionChanged() {
    console.log("log")
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PasswordModalComponent, {
      width: '500px',
      data: {} /* {name: this.name, animal: this.animal} */
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
