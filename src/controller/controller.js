import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.setListeners();
    this.view.nightModeToggle(this.model.isNightMode);
  }

  nightModeToggle() {
    this.model.setMode();
    this.view.nightModeToggle(this.model.isNightMode);
  }

  setListeners() {
    this.view.headerElement.button.addEventListener("click", () => {
      this.nightModeToggle();
    });
    this.view.mainElement.main.addEventListener("click", (event) => {
      this.eventHandler(event);
    });
  }
  eventHandler(event) {
    let isOpenBtn = event.target.closest("#openBtn");
    if (isOpenBtn) {
      this.view.mainElement.main.append(this.view.formElement.getForm());
    }
  }
}
