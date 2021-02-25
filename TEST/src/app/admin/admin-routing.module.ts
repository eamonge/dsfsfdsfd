import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { RealStateComponent } from './real-state/real-state.component';


const routes: Routes = [
  { 
    path: "", 
    component: AdminComponent, 
    children: [
      { 
        path: '', 
        component: IndexComponent
      },
      {
        path: "home/:mod",
        component: HomeComponent
      },
      
      {
        path: "real-state",
        component: RealStateComponent
      },
      {
        path: "accounting",
        loadChildren: () => import("./accounting/accounting.module").then(m => m.AccountingModule)
      },
      {
        path: "docs",
        loadChildren: () => import("./documents/documents.module").then(m => m.DocumentsModule)
      },
      {
        path: "credentials",
        loadChildren: () => import("./credentials/credentials.module").then(m => m.CredentialsModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
