import { mainParams, openButtonParams } from "./mainParams.js";
import Creator from "../creator.js";

export class MainView {
  constructor() {
    this.main = new Creator(mainParams).getElement();
    this.openButton = new Creator(openButtonParams).getElement();
    this.build(this.openButton);
  }
  build(element) {
    this.main.append(element);
  }
}
