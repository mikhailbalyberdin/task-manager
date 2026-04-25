const nigthModeKey = "isNightMode";
const structureKey = "newStructure";
const defaultNightValue = false;
const structure = [];

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
    console.log(isData);
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

    this.addToLocalStorage(structureKey, structure);
    return structure;
  }

  prepareTask(form) {
    const formData = new FormData(form);
    const task = {
      title: formData.get("title"),
      content: formData.get("note"),
      status: formData.get("favoriteBtn"),
    };

    structure.push(task);
    this.addToLocalStorage(structureKey, structure);
    console.log(task);
  }
}
