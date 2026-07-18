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
      this.isNodeElemId = event.target.closest("[data-node]").id;
      const isStatusBtn = event.target.closest("[data-status-btn]");
      const isEditBtn = event.target.closest("[data-edit-btn]");
      if (isTrashBtn && this.isNodeElemId) {
        this.model.deleteTask(this.isNodeElemId);
        this.view.mainElement.list.clearList();
        this.view.mainElement.list.build(this.model.structure);
      }
      if (isStatusBtn && this.isNodeElemId) {
        this.model.changeStatus(this.isNodeElemId);
        this.view.mainElement.list.clearList();
        this.view.mainElement.list.build(this.model.structure);
      }
      if (isEditBtn && this.isNodeElemId) {
        const task = this.model.getTask(this.isNodeElemId);
        this.view.mainElement.add(this.formElement.getForm(task));
        this.view.mainElement.add(this.formElement.fadeBlock);
      }
    });

    this.view.mainElement.main.addEventListener("click", (event) => {
      if (event.target.closest("#favBtn")) {
        this.view.mainElement.list.clearList();
        this.view.mainElement.list.build(this.model.structure, true);
      }
    });
  }

  formListener() {
    this.view.mainElement.main.addEventListener("click", (event) => {
      if (event.target.closest("#form")) {
        if (event.target.closest("#submit")) {
          event.preventDefault();
          console.log(event.target);
          this.model.prepareTask(event.target.closest("#form"));
          this.view.mainElement.list.clearList();
          this.view.mainElement.list.build(this.model.structure);
          this.formElement.selfRemove();
        }
      }
    });

    this.view.mainElement.main.addEventListener("click", (event) => {
      if (event.target.closest("#form")) {
        if (event.target.closest("#edit")) {
          event.preventDefault();
          console.log(event.target);
          this.model.editTask(this.isNodeElemId, event.target.closest("#form"));
          this.view.mainElement.list.clearList();
          this.view.mainElement.list.build(this.model.structure);
          this.formElement.selfRemove();
        }
      }
    });
    this.view.mainElement.main.addEventListener("reset", () => {
      this.formElement.selfRemove();
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
