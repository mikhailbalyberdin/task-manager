import { HeaderView } from "./header_view";

export class View {
  constructor() {
    this.app = document.querySelector("#app");
    this.headerElement = new HeaderView();
    this.build();
  }
  build() {
    this.app.append(this.headerElement.header);
  }
}
