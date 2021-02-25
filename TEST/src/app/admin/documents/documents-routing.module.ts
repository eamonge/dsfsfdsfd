import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocHomeComponent } from './doc-home/doc-home.component';
import { DocTemplatesComponent } from './doc-templates/doc-templates.component';
import { DocumentsComponent } from './documents.component';
import { FilingsComponent } from './filings/filings.component';
import { InspReportComponent } from './insp-report/insp-report.component';

const routes: Routes = [
  {
    path: "",
    component: DocumentsComponent,
    children: [
      {
        path: '',
        component: DocHomeComponent 
      },
      {
        path: 'insp-report',
        component: InspReportComponent 
      },
      {
        path: 'filings',
        component: FilingsComponent 
      },
      {
        path: 'templates',
        component: DocTemplatesComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
