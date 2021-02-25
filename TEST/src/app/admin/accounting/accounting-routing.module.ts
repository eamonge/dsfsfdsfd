import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingHomeComponent } from './accounting-home/accounting-home.component';
import { AccountingComponent } from './accounting.component';
import { DepositComponent } from './deposit/deposit.component';
import { FeesComponent } from './fees/fees.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  {
    path : "",
    component: AccountingComponent,
    children: [
      {
        path: "",
        component: AccountingHomeComponent
      },
      {
        path: "fees",
        component: FeesComponent
      },
      {
        path: "payments",
        component: PaymentsComponent
      },
      {
        path: "deposits",
        component: DepositComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
