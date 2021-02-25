import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AccountingModule } from './accounting/accounting.module';
import { DocumentsModule } from './documents/documents.module';

import { RealStateComponent } from './real-state/real-state.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { UsersComponent } from './users/users.component';
import { AccountingComponent } from './accounting/accounting.component';
import { PasswordMgmtComponent } from './password-mgmt/password-mgmt.component';
import { PasswordModalComponent } from './password-modal/password-modal.component';

import { IndexComponent } from './index/index.component';
import { CredentialsModule } from './credentials/credentials.module';



@NgModule({
  declarations: [
    AdminComponent, RealStateComponent, 
    HomeComponent, ClientsComponent, UsersComponent, AccountingComponent, 
    PasswordMgmtComponent, PasswordModalComponent, IndexComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DocumentsModule,
    AccountingModule,
    CredentialsModule
  ]
})

export class AdminModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far);
    library.addIconPacks(fab);
    library.addIconPacks(fal);
    library.addIconPacks(fad);
  }
}
