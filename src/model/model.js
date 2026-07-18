const nigthModeKey = "isNightMode";
const structureKey = "newStructure";
const defaultNightValue = false;

export class Model {
  constructor() {
    this.structure = this.structureInit();
    this.isNightMode = this.setDefaultMode();
  }

  addToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setDefaultMode() {
    let isData = this.getFromLocalStorage(nigthModeKey);
    if (!isData) {
      this.addToLocalStorage(nigthModeKey, defaultNightValue);
      isData = defaultNightValue;
    }
    return isData;
  }
  setMode() {
    this.isNightMode = !this.isNightMode;
    this.addToLocalStorage(nigthModeKey, this.isNightMode);
  }

  structureInit() {
    const isStructure = this.getFromLocalStorage(structureKey);
    if (isStructure) {
      return isStructure;
    }
    const structure = [];
    this.addToLocalStorage(structureKey, structure);
    return structure;
  }

  prepareTask(form) {
    const formData = new FormData(form);
    const task = {
      title: formData.get("title"),
      content: formData.get("note"),
      status: formData.get("favoriteBtn"),
      isChanged: false, // isChanged is rewritten after submission
      date: this.setDate(),
    };
    console.log(task.status);
    console.log(formData);

    this.structure.push(task);
    this.addToLocalStorage(structureKey, this.structure);
    console.log(task);
  }

  editTask(index, form) {
    const formData = new FormData(form);
    if (this.structure[index].title !== formData.get("title")) {
      this.structure[index].title = formData.get("title");
      this.structure[index].date = this.setDate();
      this.structure[index].isChanged = true;
    }
    if (this.structure[index].content === formData.get("content")) {
      this.structure[index].content = formData.get("content");
      this.structure[index].date = this.setDate();
      this.structure[index].isChanged = true;
    }
    if (this.structure[index].status === formData.get("status")) {
      this.structure[index].status = formData.get("status");
      this.structure[index].date = this.setDate();
      this.structure[index].isChanged = true;
    }
    this.addToLocalStorage(structureKey, this.structure);
  }

  changeEditStatus(index) {
    if (!this.structure[index].isChanged) {
      this.structure[index].isChanged = true;
      this.addToLocalStorage(structureKey, this.structure);
    }
  }
  deleteTask(index) {
    this.structure.splice(index, 1);
    this.addToLocalStorage(structureKey, this.structure);
  }

  changeStatus(index) {
    if (this.structure[index].status) {
      this.structure[index].status = null;
    } else {
      this.structure[index].status = "on";
    }
    this.changeEditStatus(index);
    this.addToLocalStorage(structureKey, this.structure);
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

  getTask(index) {
    return this.structure[index];
  }

  checkForm(parent, child) {
    return parent.contains(child);
  }
}
