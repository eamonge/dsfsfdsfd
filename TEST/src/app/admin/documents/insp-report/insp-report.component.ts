import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-insp-report',
  templateUrl: './insp-report.component.html',
  styleUrls: ['./insp-report.component.scss']
})
export class InspReportComponent implements OnInit {

  rForm: FormGroup;
  addressForm: FormGroup;
  inspectionCompany: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      streetNumber: new FormControl(''),
      streetFraction: new FormControl(''),
      streetDirection: new FormControl(''),
      streetName: new FormControl(''),
      streetType: new FormControl(''),
      streetUnit: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    });
    this.inspectionCompany = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      logo: new FormControl(null),
      address: new FormControl('')
    })
    this.rForm = new FormGroup({
      inspector: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      reportName: new FormControl('', Validators.required),
      coverImage: new FormControl(null, Validators.required),
      addrees: this.addressForm,
      inspectionCompany: this.inspectionCompany
    });
  }

  submit(): void {
    console.log(this.rForm.controls)
  }

}
