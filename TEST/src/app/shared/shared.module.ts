import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { LoggingService } from '../logging.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    FormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
    FormComponent
  ],
  entryComponents: [AlertComponent],
  providers: [LoggingService]
})
export class SharedModule {}
