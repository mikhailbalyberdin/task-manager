import {
  mainParams,
  containerParams,
  addNotesButtonParams,
  buttonContainerParams,
  favBtnParams,
  normalBtnParams,
  listButtonContainerParams,
} from "./mainParams.js";
import Creator from "../creator.js";
import { NoteListView } from "../note-list_view.js";

export class MainView {
  constructor() {
    this.main = new Creator(mainParams).getElement();
    this.container = new Creator(containerParams).getElement();
    this.build();
  }
  build() {
    const buttonContainer = new Creator(buttonContainerParams).getElement();

    const addNotesButton = new Creator(addNotesButtonParams).getElement();

    const listButtonContainer = new Creator(
      listButtonContainerParams,
    ).getElement();
    this.favBtn = new Creator(favBtnParams).getElement();
    this.normalBtn = new Creator(normalBtnParams).getElement();
    listButtonContainer.append(this.favBtn, this.normalBtn);

    buttonContainer.append(addNotesButton, listButtonContainer);
    this.container.append(buttonContainer);

    this.list = new NoteListView();
    this.container.append(this.list.list);

    this.main.append(this.container);
  }

  add(element) {
    this.container.append(element);
  }

  arrayBtnToggle(arrayType) {
    if (arrayType === "normalBtn") {
      this.normalBtn.classList.add("active");
      this.favBtn.classList.remove("active");
    }
    if (arrayType === "favBtn") {
      this.normalBtn.classList.remove("active");
      this.favBtn.classList.add("active");
    }
  }
}
