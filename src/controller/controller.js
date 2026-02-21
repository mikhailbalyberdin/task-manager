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
      this.view.mainElement.build(this.view.formElement.getForm());
      this.view.mainElement.build(this.view.formElement.getfadeBlock());

      this.view.formElement.form.addEventListener("submit", (event) => {
        event.preventDefault();
        this.model.prepareTask(this.view.formElement.form);
        this.view.formElement.selfRemove();
      });

      this.view.formElement.form.addEventListener("reset", () => {
        this.view.formElement.selfRemove();
      });
    }
  }
}
