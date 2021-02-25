import { IOption } from "../interfaces/i-option";

export class CustomOption implements IOption {
  value: any;
  option: string;

  constructor(option: string = '', value: any = null){
    this.value = value ? value : option;
    this.option = option;
  }
}
