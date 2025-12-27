import Creator from "./creator";
import { headerParams, logoParams } from "./headerParams";

export class HeaderView {
  constructor() {
    this.header = new Creator(headerParams).getElement();
    this.logo = new Creator(logoParams);
    this.build();
  }
  build() {
    this.header.append(this.logo.getElement());
  }
}
