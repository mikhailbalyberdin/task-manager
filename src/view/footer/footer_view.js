import Creator from "../creator.js";
import {
  footerParams,
  containerParams,
  linkParams,
  linkTextParams,
  iconParams,
} from "./footerParams";

export class FooterView {
  constructor() {
    this.footer = new Creator(footerParams).getElement();
    this.build();
    console.log(this.footer);
  }

  build() {
    this.container = new Creator(containerParams).getElement();
    this.icon = new Creator(iconParams).getElement();
    this.link = new Creator(linkParams).getElement();
    this.linkText = new Creator(linkTextParams).getElement();
    this.link.append(this.icon, this.linkText);
    this.container.append(this.link);
    this.footer.append(this.container);
  }
}
