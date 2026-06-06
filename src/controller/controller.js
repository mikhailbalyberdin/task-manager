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
    this.view.headerElement.header.addEventListener("click", (event) => {
      if (event.target.closest("#nightMode")) {
        this.nightModeToggle();
      }
    });
    this.view.mainElement.main.addEventListener("click", (event) => {
      this.eventHandler(event);
    });

    this.view.formElement.form.addEventListener("submit", (event) => {
      if (event.target.closest("#form")) {
        event.preventDefault();
        console.log("+");
        this.model.prepareTask(this.view.formElement.form);
        this.view.mainElement.list.build(this.model.structure);
        this.view.formElement.reset();
        this.view.formElement.form.classList.add("hidden");
        this.view.formElement.fadeBlock.classList.add("hidden");
        this.view.mainElement.list.clearList();
        this.view.mainElement.list.build(this.model.structure);
      }
    });
    this.view.formElement.form.addEventListener("reset", () => {
      this.view.formElement.form.classList.add("hidden");
      this.view.formElement.fadeBlock.classList.add("hidden");
    });

    this.view.mainElement.list.list.addEventListener("click", (event) => {
      const isTrashBtn = event.target.closest("[data-trash-btn]");
      const isNodeElemId = event.target.closest("[data-node]").id;
      const isStatusBtn = event.target.closest("[data-status-btn]");
      if (isTrashBtn && isNodeElemId) {
        this.model.deleteTask(isNodeElemId);
        this.view.mainElement.list.clearList();
        this.view.mainElement.list.build(this.model.structure);
      }
      if (isStatusBtn && isNodeElemId) {
        this.model.changeStatus(isNodeElemId);
        this.view.mainElement.list.clearList();
        this.view.mainElement.list.build(this.model.structure);
      }
    });
  }

  eventHandler(event) {
    let isOpenBtn = event.target.closest("#openBtn");
    if (isOpenBtn) {
      if (
        this.model.checkForm(
          this.view.mainElement.container,
          this.view.formElement.form,
        )
      ) {
        this.view.formElement.form.classList.remove("hidden");
        this.view.formElement.fadeBlock.classList.remove("hidden");
      } else {
        this.view.mainElement.add(this.view.formElement.getForm());
        this.view.mainElement.add(this.view.formElement.getfadeBlock());
      }
    }
  }
}
