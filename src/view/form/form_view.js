import Creator from "../creator";
import {
  inputContainerParams,
  formParams,
  realCheckboxParams,
  inputTextParams,
  labelParams,
  fakeCheckboxParams,
  textAreaParams,
  buttonContainerParams,
  submitButtonParams,
  cancelButtonParams,
} from "./formParams";
export class FormView {
  constructor() {
    this.form = null;
    this.build();
  }

  build() {
    this.form = new Creator(formParams).getElement();
    this.inputContainer = new Creator(inputContainerParams).getElement();
    this.textInput = new Creator(inputTextParams).getElement();
    this.label = new Creator(labelParams).getElement();
    this.checkboxReal = new Creator(realCheckboxParams).getElement();
    this.checkboxFake = new Creator(fakeCheckboxParams).getElement();
    this.textArea = new Creator(textAreaParams).getElement();
    this.buttonContainer = new Creator(buttonContainerParams).getElement();
    this.submitButton = new Creator(submitButtonParams).getElement();
    this.cancelButton = new Creator(cancelButtonParams).getElement();

    this.label.append(this.checkboxFake, this.checkboxReal);
    this.inputContainer.append(this.textInput, this.label);
    this.buttonContainer.append(this.submitButton, this.cancelButton);
    this.form.append(this.inputContainer, this.textArea, this.buttonContainer);
  }

  getForm() {
    return this.form;
  }
}
