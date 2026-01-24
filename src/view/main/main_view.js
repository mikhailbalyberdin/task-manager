import { mainParams, openButtonParams } from "./mainParams.js";
import Creator from "../creator.js";

export class MainView {
  constructor() {
    this.main = new Creator(mainParams).getElement();
    this.openButton = new Creator(openButtonParams).getElement();
    this.build();
  }
  build() {
    this.main.append(this.openButton);
    console.log(this.openButton);
  }
}
