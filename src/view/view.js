import { HeaderView } from "./header_view";
import { MainView } from "./main_view";
export class View {
  constructor() {
    this.app = document.querySelector("#app");
    this.headerElement = new HeaderView();
    this.mainElement = new MainView();
    this.build();
  }
  build() {
    this.app.append(this.headerElement.header, this.mainElement.main);
  }
  nightModeToggle(isNightMode) {
    if (isNightMode) {
      this.app.classList.add("dark");
    } else {
      this.app.classList.remove("dark");
    }
  }
}
