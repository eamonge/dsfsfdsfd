import { InputTypes } from "../enums/input-types.enum";
import { IControl } from "../interfaces/i-control";
import { CustomOption } from "./custom-option";

export class CustomControl implements IControl {
  label: string;
  name: string;
  options?: CustomOption[];
  type: InputTypes;

  constructor(label: string = '', name: string = '', type: InputTypes = InputTypes.Input, options: CustomOption[] = []){
    this.label = label;
    this.name = name;
    this.type = type;
    this.options = options
  }
}
