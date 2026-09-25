import { HeaderView } from "../header/header_view";
import { MainView } from "./main/main_view";
import { FooterView } from "./footer/footer_view";
export class View {
  constructor() {
    this.app = document.querySelector("#app");
    this.headerElement = new HeaderView();
    this.mainElement = new MainView();
    this.footerElement = new FooterView();
    this.build();
  }
  build() {
    this.app.append(
      this.headerElement.header,
      this.mainElement.main,
      this.footerElement.footer,
    );
  }
  nightModeToggle(isNightMode) {
    if (isNightMode) {
      this.app.classList.add("dark");
    } else {
      this.app.classList.remove("dark");
    }
  }
}
