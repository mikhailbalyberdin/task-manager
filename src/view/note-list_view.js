import Creator from "./creator";
import {
  noteListParams,
  noteListElementParams,
  noteListHeaderContainer,
  noteListTitle,
  noteListButtonDateContainer,
  noteListDate,
  noteListButtonContainer,
  noteListButton,
  noteListContent,
} from "./note-list_params";
export class NoteListView {
  constructor() {
    this.list = new Creator(noteListParams).getElement();
    console.log(this.list);
  }
  // Передавать в build заметки из модели через метод getFromLocalStorage
  build(noteList) {
    for (let x of noteList) {
      const listElement = new Creator(noteListElementParams).getElement();
      const headerContainer = new Creator(noteListHeaderContainer).getElement();

      const title = new Creator(noteListTitle).getElement();
      title.innerHTML = x.title;

      const buttonDateContainer = new Creator(
        noteListButtonDateContainer,
      ).getElement();
      const date = new Creator(noteListDate).getElement();
      const buttonContainer = new Creator(noteListButtonContainer).getElement();
      const button = new Creator(noteListButton).getElement();

      const content = new Creator(noteListContent).getElement();
      content.innerHTML = x.content;

      buttonContainer.append(button);
      buttonDateContainer.append(date, buttonContainer);
      headerContainer.append(title);

      listElement.append(headerContainer, buttonDateContainer, content);
      this.list.append(listElement);
    }
  }
  getList() {
    return this.list;
  }
  clearList() {
    this.list.innerHTML = "";
  }
}
