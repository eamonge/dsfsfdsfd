import { CustomControl } from "../classes/custom-control";

export interface IForm {
  controls: CustomControl[];
  formGroups?: IForm[];
  name: string;
}
