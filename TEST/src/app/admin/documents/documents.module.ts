import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { DocTemplatesComponent } from './doc-templates/doc-templates.component';
import { DocHomeComponent } from './doc-home/doc-home.component';
import { InspReportComponent } from './insp-report/insp-report.component';
import { FilingsComponent } from './filings/filings.component';


@NgModule({
  declarations: [DocumentsComponent, DocTemplatesComponent, DocHomeComponent, InspReportComponent, FilingsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DocumentsRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DocumentsModule { 
  //it should be a way to import this just once in the app module, but for some reason it is not working
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
