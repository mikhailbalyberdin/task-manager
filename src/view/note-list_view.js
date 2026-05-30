import Creator from "./creator";
import {
  noteListParams,
  noteListElementParams,
  noteListHeaderContainer,
  noteListTitle,
  noteListButtonDateContainer,
  noteListDate,
  noteListButtonContainer,
  noteListDeleteButton,
  noteListContent,
  listElementContainerParams,
  noteListEditButton,
  noteListFavoritesButton,
} from "./note-list_params";

export class NoteListView {
  constructor() {
    this.list = new Creator(noteListParams).getElement();
  }

  setDate() {
    const event = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return event.toLocaleDateString("en-en", options);
  }

  build(noteList) {
    for (let elem of noteList) {
      noteListElementParams.attr.id = noteList.indexOf(elem);
      const listElement = new Creator(noteListElementParams).getElement();
      const listElementContainer = new Creator(
        listElementContainerParams,
      ).getElement();

      const headerContainer = new Creator(noteListHeaderContainer).getElement();

      const title = new Creator(noteListTitle).getElement();
      title.innerHTML = elem.title;

      const buttonDateContainer = new Creator(
        noteListButtonDateContainer,
      ).getElement();
      const date = new Creator(noteListDate).getElement();
      date.innerHTML = this.setDate();
      const buttonContainer = new Creator(noteListButtonContainer).getElement();
      const deleteButton = new Creator(noteListDeleteButton).getElement();
      const editButton = new Creator(noteListEditButton).getElement();
      const favoritesButton = new Creator(noteListFavoritesButton).getElement();

      const content = new Creator(noteListContent).getElement();
      content.innerHTML = elem.content;

      buttonContainer.append(deleteButton, editButton, favoritesButton);
      buttonDateContainer.append(date, buttonContainer);
      headerContainer.append(title, buttonDateContainer);

      listElementContainer.append(headerContainer, content);

      listElement.append(listElementContainer);
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
