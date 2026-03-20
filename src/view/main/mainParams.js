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
  class: ["flex", "gap-5"],
  tagName: "div",
};

export const addNotesButtonParams = {
  class: [
    "w-full",
    "h-15",
    "relative",
    "bg-yellow-500",
    "rounded-md",
    "p-2",
    "text-center",
    "align-text-middle",
  ],
  tagName: "div",
  text: "Add note",
  attr: { id: "addNote" },
};

export const openButtonParams = {
  class: ["w-20", "h-20", "absolute"],
  tagName: "button",
  attr: { id: "openBtn" },
};

export const favNotesParams = {
  class: [
    "w-47.5",
    "h-15",
    "bg-yellow-500",
    "rounded-md",
    "p-2",
    "text-center",
    "align-text-middle",
  ],
  tagName: "div",
  text: "Favorite",
};

export const favBtnParams = {
  class: [],
  tagName: "button",
  attr: { id: "favBtn" },
};

export const normalNotesParams = {
  class: [
    "w-47.5",
    "h-15",
    "bg-yellow-500",
    "rounded-md",
    "p-2",
    "text-center",
    "align-text-middle",
  ],
  tagName: "div",
  text: "All",
};

export const normalBtnParams = {
  class: [],
  tagName: "button",
  attr: { id: "normalBtn" },
};
