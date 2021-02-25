import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomControl } from 'src/app/shared/classes/custom-control';
import { CustomForm } from 'src/app/shared/classes/custom-form';
import { CustomOption } from 'src/app/shared/classes/custom-option';
import { InputTypes } from 'src/app/shared/enums/input-types.enum';


@Component({
  selector: 'app-real-state',
  templateUrl: './real-state.component.html',
  styleUrls: ['./real-state.component.scss']
})
export class RealStateComponent implements OnInit {
  customForm: CustomForm;

  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.customForm = {
      controls: [
        {
          label: 'Residential and Commercial',
          name: 'residentialAndCommercial',
          type: InputTypes.Select,
          options: [
            new CustomOption('Residential'),
            new CustomOption('Commercial')
          ]
        },
        {
          label: 'Street Number',
          name: 'streetNumber',
          type: InputTypes.Input
        },
        {
          label: 'Street Fractions',
          name: 'streetFractions',
          type: InputTypes.Select,
          options: [
            {
              value: 1,
              option: '1/2'
            },
            {
              value: 2,
              option: '1/4'
            },
            {
              value: 3,
              option: '1/3'
            },
            {
              value: 4,
              option: '3/4'
            },
            {
              value: 5,
              option: '3/4'
            }
          ]
        },
        {
          label: 'Street Direction',
          name: 'streetDirection',
          type: InputTypes.Select,
          options: [
            new CustomOption('East'),
            new CustomOption('North'),
            new CustomOption('NorthEast')
          ]
        },
        {
          label: 'Street Name',
          name: 'streetName',
          type: InputTypes.Input
        },
        {
          label: 'Street Type',
          name: 'streetType',
          type: InputTypes.Select,
          options: [
            new CustomOption('Alley'),
            new CustomOption('Annex'),
            new CustomOption('Bend')
          ]
        },
        {
          label: 'Street Unit',
          name: 'streetUnit',
          type: InputTypes.Input
        },
        {
          label: 'City/Town',
          name: 'cityTown',
          type: InputTypes.Select,
          options: [
            {
              value: 'BC',
              option: 'Bolder City'
            },
            {
              value: 'BUNK',
              option: 'Bunkerville'
            },
            {
              value: 'CNTY',
              option: 'County'
            }
          ]
        },
        {
          label: 'State',
          name: 'state',
          type: InputTypes.Input
        },
        {
          label: 'Zip Code',
          name: 'zipCode',
          type: InputTypes.Input
        }
      ],
      formGroups: [],
      name: ''
    }
    console.log(this.customForm)
  }

  updateForm(event: FormGroup){
    this.form = event;
  }

}
