import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { AppIconsModule } from 'src/app/app-icons/app-icons.module';
import { AccountingRoutingModule } from './accounting-routing.module';

import { AccountingHomeComponent } from './accounting-home/accounting-home.component';
import { FeesComponent } from './fees/fees.component';
import { PaymentsComponent } from './payments/payments.component';
import { DepositComponent } from './deposit/deposit.component';



@NgModule({
  declarations: [
    AccountingHomeComponent,
    FeesComponent,
    PaymentsComponent,
    DepositComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountingRoutingModule,
    AppIconsModule,
    MatCardModule,
  ]
})
export class AccountingModule { }
