import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomForm } from '../classes/custom-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() customForm: CustomForm;

  @Output() formSubmitter: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  form: FormGroup = new FormGroup({});

  constructor() { 
  }

  ngOnInit(): void {
    this.customForm.controls.forEach(control => {
      this.form.addControl(control.name, new FormControl());
    });
    this.customForm.formGroups!.forEach(formGroup => {
      let tempForm: FormGroup = new FormGroup({});
      formGroup.controls.forEach(control => {
        tempForm.addControl(control.name, new FormControl())
      });
      this.form.addControl(formGroup.name, new FormGroup(tempForm.controls))
    })
    this.form.valueChanges.subscribe(changes => {
      this.formSubmitter.emit(this.form)
    })
  }

}
