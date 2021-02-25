import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss']
})
export class DocHomeComponent implements OnInit {
  data:any;

  constructor() { }

  ngOnInit(): void {
    this.data = [
      "LM Vital Documents",
      "LM Binder Preparation",
      "LM Consultation",
      "LM Status Progress",
      "LM Autorizacion",
      "LM Request for Information",
      "LM Financial Hardship Memorandum",
      "LM Fax Form",
      "LM Qualified Written Request",
      "LM QWR Violation Letter",
      "LM Life of Loan Evaluation",
      "LM 4506-T",
      "LM Income Affidavit",
      "LM RMA",
      "LM Collector Calls"
    ]
  }

}
