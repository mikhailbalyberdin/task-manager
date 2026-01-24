import Creator from "../creator";
import { formParams, inputParams } from "./formParams";
export class FormView {
  constructor() {
    this.form = new Creator(formParams).getElement();
    this.input = new Creator(inputParams).getElement();
    this.build();
  }

  build() {
    this.form.append(this.input);
  }

  getForm() {
    return this.form;
  }
}
