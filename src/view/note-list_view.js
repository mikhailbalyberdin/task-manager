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
  noteListRegularButton,
} from "./note-list_params";

export class NoteListView {
  constructor() {
    this.list = new Creator(noteListParams).getElement();
  }
  build(noteList, isFavorite = null) {
    let currentList = null;
    if (!isFavorite) {
      currentList = noteList;
    } else {
      currentList = noteList.filter((task) => task.status);
    }
    for (let elem of currentList) {
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
      date.innerHTML = elem.date;
      const buttonContainer = new Creator(noteListButtonContainer).getElement();
      const deleteButton = new Creator(noteListDeleteButton).getElement();
      const editButton = new Creator(noteListEditButton).getElement();
      let favoriteButton = null;
      if (elem.status) {
        favoriteButton = new Creator(noteListFavoritesButton).getElement();
      } else {
        favoriteButton = new Creator(noteListRegularButton).getElement();
      }
      const content = new Creator(noteListContent).getElement();
      content.innerHTML = elem.content;

      buttonContainer.append(deleteButton, editButton, favoriteButton);
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
