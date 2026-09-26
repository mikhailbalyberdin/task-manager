const nigthModeKey = "isNightMode";
const structureKey = "newStructure";
const arrayTypeKey = "arrayType";
const defaultNightValue = false;
const defaultTypeValue = "normalBtn";
export class Model {
  constructor() {
    this.structure = this.structureInit();
    this.isNightMode = this.setDefaultMode();
    this.arrayType = this.setDefaultType();
  }

  addToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setDefaultType() {
    let isData = this.getFromLocalStorage(arrayTypeKey);
    if (!isData) {
      this.addToLocalStorage(arrayTypeKey, defaultTypeValue);
      isData = defaultTypeValue;
    }
    return isData;
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

  setArrayType(type) {
    if (type !== this.arrayType) {
      this.arrayType = type;
      this.addToLocalStorage(arrayTypeKey, this.arrayType);
    }
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
    if (task.title.length < 1) {
      task.title = "No title";
    }
    if (task.content.length < 1) {
      task.content = "No content";
    }
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

    if (!formData.get("title")) {
      this.structure[index].title = "No title";
    }

    if (this.structure[index].content !== formData.get("note")) {
      this.structure[index].content = formData.get("note");
      this.structure[index].date = this.setDate();
      this.structure[index].isChanged = true;
    }

    if (!formData.get("content")) {
      this.structure[index].content = "No content";
    }

    if (this.structure[index].status !== formData.get("favoriteBtn")) {
      this.structure[index].status = formData.get("favoriteBtn");
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

  searchString(string) {
    const matchedArray = this.structure.filter(
      (task) =>
        task.title?.toLowerCase().includes(string.toLowerCase()) ||
        task.content?.toLowerCase().includes(string.toLowerCase()),
    );
    return matchedArray;
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
