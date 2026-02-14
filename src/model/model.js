const nigthModeKey = "isNightMode";
const structureKey = "structure";
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

    const structure = {
      favorite: [],
      normal: [],
    };

    this.addToLocalStorage(structureKey, structure);
    return structure;
  }
}
