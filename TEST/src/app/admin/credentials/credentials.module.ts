import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { CredentialsRoutingModule } from './credentials-routing.module';
import { CredentialsComponent } from './credentials.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [CredentialsComponent, IndexComponent],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    MatTableModule,
  ]
})
export class CredentialsModule { }
