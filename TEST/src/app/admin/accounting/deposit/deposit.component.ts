import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(title: string) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'deposit-dialog',
  templateUrl: 'deposit-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}