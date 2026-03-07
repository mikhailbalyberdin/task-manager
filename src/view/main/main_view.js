import {
  mainParams,
  openButtonParams,
  buttonTextParams,
  containerParams,
} from "./mainParams.js";
import Creator from "../creator.js";

const buttonText = new Creator(buttonTextParams).getElement();
export class MainView {
  constructor() {
    this.main = new Creator(mainParams).getElement();
    this.container = new Creator(containerParams).getElement();
    this.main.append(this.container);
    this.openButton = new Creator(openButtonParams).getElement();
    this.openButton.append(buttonText);
    this.build(this.openButton);
  }
  build(element) {
    this.container.append(element);
  }
}
