import Creator from "../creator";
import {
  headerParams,
  buttonParams,
  logoContainerParams,
  logoTextParams,
  logoImageParams,
  containerParams,
  searchParams,
  searchContainerParams,
} from "./headerParams";

export class HeaderView {
  constructor() {
    this.header = new Creator(headerParams).getElement();
    this.container = new Creator(containerParams).getElement();
    this.build();
  }
  build() {
    this.container.append(this.buildLogo());
    const searchContainer = new Creator(searchContainerParams).getElement();
    searchContainer.append(this.buildSearchButton(), this.buildButton());
    this.container.append(searchContainer);
    this.header.append(this.container);
  }

  buildLogo() {
    const logoImage = new Creator(logoImageParams).getElement();
    const logoText = new Creator(logoTextParams).getElement();
    const logo = new Creator(logoContainerParams).getElement();
    logo.append(logoImage, logoText);
    return logo;
  }

  buildSearchButton() {
    const searchButton = new Creator(searchParams).getElement();
    return searchButton;
  }

  buildButton() {
    const button = new Creator(buttonParams).getElement();
    return button;
  }
}
