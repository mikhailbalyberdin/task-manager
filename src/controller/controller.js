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
  }
}
