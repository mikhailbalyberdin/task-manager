import Creator from "../creator.js";
import {
  footerParams,
  containerParams,
  linkWrapperParams,
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
    this.linkWrapper = new Creator(linkWrapperParams).getElement();
    this.icon = new Creator(iconParams).getElement();
    this.link = new Creator(linkParams).getElement();
    this.linkText = new Creator(linkTextParams).getElement();
    this.link.append(this.icon, this.linkText);
    this.linkWrapper.append(this.link);
    this.container.append(this.linkWrapper);
    this.footer.append(this.container);
  }
}
