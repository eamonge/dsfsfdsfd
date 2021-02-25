import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './credentials.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: "",
    component: CredentialsComponent,
    children: [
      {
        path: "",
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialsRoutingModule { }
