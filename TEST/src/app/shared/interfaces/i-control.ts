import { CustomOption } from "../classes/custom-option";
import { InputTypes } from "../enums/input-types.enum";

export interface IControl {
  label: string;
  name: string;
  options?: CustomOption[];
  type: InputTypes;
}
