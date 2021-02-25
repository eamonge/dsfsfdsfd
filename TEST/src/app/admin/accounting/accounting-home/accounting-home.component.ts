import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

class Record {
  name: string;
  date: string;
  amount: number;
  account: string;
}


@Component({
  selector: 'app-accounting-home',
  templateUrl: './accounting-home.component.html',
  styleUrls: ['./accounting-home.component.scss']
})
export class AccountingHomeComponent implements OnInit {
  flags: any = {
    payment: false,
    deposit: false,
    fee: false
  }
  record: Record = new Record();
    
  data: any = {
    "payments" : [
      { name: "Client Payment", date: "12/19/14", amount: 444.44 },
      { name: "Client Payment", date: "12/19/14", amount: 444.44 },
      { name: "Client Payment", date: "12/19/14", amount: 444.44 },
      { name: "Client Payment", date: "12/19/14", amount: 444.44 },
      { name: "Client Payment", date: "12/19/14", amount: 444.44 },
    ],
    "deposits" : [
      { name: "Client Payment", date: "12/19/14", amount: 345.56, account: "Bank #1" },
      { name: "Client Payment", date: "12/19/14", amount: 345.56, account: "Bank #1"  },
      { name: "Client Payment", date: "12/19/14", amount: 345.56, account: "Bank #1"  },
      { name: "Client Payment", date: "12/19/14", amount: 345.56, account: "Bank #1"  },
    ],
    "fees" : [
      { name: "Client Payment", date: "12/19/14", amount: 567.56 },
      { name: "Client Payment", date: "12/19/14", amount: 567.56 },
    ]
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      /* data: {
        title: title
      } */
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

  changeFlagStatus(flag:string){
    this.flags[flag] = !this.flags[flag];
  }

}


@Component({
  selector: 'image-dialog',
  templateUrl: 'image-dialog.html',
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
