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
      date: this.setDate(),
    };
    console.log(task.status);

    this.structure.push(task);
    this.addToLocalStorage(structureKey, this.structure);
    console.log(task);
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

  checkForm(parent, child) {
    return parent.contains(child);
  }
}
