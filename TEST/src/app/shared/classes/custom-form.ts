import { IForm } from "../interfaces/i-form";
import { CustomControl } from "./custom-control";

export class CustomForm implements IForm {
  controls: CustomControl[];
  formGroups?: CustomForm[];
  name: string;

  constructor(controls: CustomControl[] = [], formGroups: CustomForm[] = [], name: string = ''){
    this.controls = controls;
    this.formGroups = formGroups ? formGroups : [];
    this.name = name;
  }
}
