import { Model } from "../model/model";
import { View } from "../view/view";
import { FormView } from "../view/form/form_view";

export class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.formElement = new FormView();
    this.setListeners();
    this.formListener();
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

    this.view.mainElement.list.list.addEventListener("click", (event) => {
      const isTrashBtn = event.target.closest("[data-trash-btn]");
      const isNodeElemId = event.target.closest("[data-node]").id;
      const isStatusBtn = event.target.closest("[data-status-btn]");
      const isEditBtn = event.target.closest("[data-edit-btn]");
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
      if (isEditBtn && isNodeElemId) {
        const task = this.model.getTask(isNodeElemId);
        this.view.mainElement.add(this.formElement.getForm(task));
        this.view.mainElement.add(this.formElement.fadeBlock);
      }
    });
  }

  formListener() {
    this.view.mainElement.main.addEventListener("submit", (event) => {
      if (event.target.closest("#form")) {
        event.preventDefault();
        this.model.prepareTask(event.target);
        this.view.mainElement.list.clearList();
        this.view.mainElement.list.build(this.model.structure);
        this.formElement.selfRemove();
      }
      this.view.mainElement.main.addEventListener("reset", () => {
        this.formElement.selfRemove();
      });
    });
  }

  eventHandler(event) {
    let isOpenBtn = event.target.closest("#openBtn");
    if (isOpenBtn) {
      this.view.mainElement.add(this.formElement.getForm());
      this.view.mainElement.add(this.formElement.fadeBlock);
    }
  }
}

// 1.
