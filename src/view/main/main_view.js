import {
  mainParams,
  openButtonParams,
  containerParams,
  addNotesButtonParams,
  buttonContainerParams,
  favNotesParams,
  favBtnParams,
  normalNotesParams,
  normalBtnParams,
  listButtonContainerParams,
} from "./mainParams.js";
import Creator from "../creator.js";

export class MainView {
  constructor() {
    this.main = new Creator(mainParams).getElement();
    this.container = new Creator(containerParams).getElement();
    const buttonContainer = new Creator(buttonContainerParams).getElement();

    const addNotesButton = new Creator(addNotesButtonParams).getElement();
    const openButton = new Creator(openButtonParams).getElement();
    openButton.append(addNotesButton);

    const listButtonContainer = new Creator(
      listButtonContainerParams,
    ).getElement();
    const favNotes = new Creator(favNotesParams).getElement();
    const favBtn = new Creator(favBtnParams).getElement();
    // favNotes.append(favBtn);
    favBtn.append(favNotes);
    const normalNotes = new Creator(normalNotesParams).getElement();
    const normalBtn = new Creator(normalBtnParams).getElement();
    // normalNotes.append(normalBtn);
    normalBtn.append(normalNotes);
    listButtonContainer.append(favBtn, normalBtn);

    buttonContainer.append(openButton, listButtonContainer);
    this.container.append(buttonContainer);

    this.main.append(this.container);

    // this.openButton = new Creator(openButtonParams).getElement();
    // this.openButton.append(buttonText);
    // this.build(this.openButton);
  }
  build(element) {
    this.container.append(element);
  }
}
