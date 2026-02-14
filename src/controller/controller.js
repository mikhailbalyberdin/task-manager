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
      this.view.mainElement.main.append(this.view.formElement.getfadeBlock());
      this.view.formElement.form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(this.view.formElement.form);
        console.log(formData);
        console.log(formData.get("favoriteBtn"));
        console.log(formData.get("title"));
        console.log(formData.get("note"));
      });
    }
  }
}
