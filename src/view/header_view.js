import Creator from "./creator";
import { headerParams, logoParams, buttonParams } from "./headerParams";

export class HeaderView {
  constructor() {
    this.header = new Creator(headerParams).getElement();
    this.logo = new Creator(logoParams).getElement();
    this.button = new Creator(buttonParams).getElement();
    this.build();
  }
  build() {
    this.header.append(this.logo, this.button);
  }
}
