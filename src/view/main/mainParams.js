export const mainParams = {
  class: [],
  tagName: "main",
};

export const containerParams = {
  class: ["flex", "flex-col", "items-center", "p-10", "gap-10"],
  tagName: "div",
};

export const buttonContainerParams = {
  class: ["flex", "flex-col", "max-w-100", "w-full", "items-center", "gap-5"],
  tagName: "div",
};

export const listButtonContainerParams = {
  class: ["w-full", "flex", "gap-5"],
  tagName: "div",
};

export const addNotesButtonParams = {
  class: ["w-full", "bg-yellow-500", "rounded-md", "p-5", "text-center"],
  tagName: "button",
  attr: { id: "openBtn" },
  text: "Add Note",
};

export const favBtnParams = {
  class: ["w-full", "bg-yellow-500", "rounded-md", "p-5", "text-center"],
  tagName: "button",
  attr: { id: "favBtn" },
  text: "Favorite",
};

export const normalBtnParams = {
  class: ["w-full", "bg-yellow-500", "rounded-md", "p-2", "text-center"],
  tagName: "button",
  attr: { id: "normalBtn" },
  text: "All",
};
