export const formParams = {
  class: [
    "flex",
    "flex-col",
    "items-center",
    "border-2",
    "border-solid",
    "border-black",
    "absolute",
    "z-1",
    "top-1/2",
    "left-1/2",
    "-translate-1/2",
  ],
  tagName: "form",
};
export const inputContainerParams = {
  class: ["flex", "gap-x-10"],
  tagName: "div",
};

export const inputTextParams = {
  class: [],
  tagName: "input",
  attr: { type: "text", id: "note", name: "title", placeholder: "Add Note" },
};

export const labelParams = {
  class: [],
  tagName: "label",
};

export const realCheckboxParams = {
  class: ["real"],
  tagName: "input",
  attr: { type: "checkbox", name: "favoriteBtn", id: "star" },
};

export const fakeCheckboxParams = {
  class: ["fake-checkbox"],
  tagName: "span",
};

export const textAreaParams = {
  class: ["w-100"],
  attr: { name: "note" },
  tagName: "textarea",
};

export const buttonContainerParams = {
  class: [],
  tagName: "div",
};

export const submitButtonParams = {
  class: ["bg-red-500", "px-4", "py-2"],
  tagName: "button",
  attr: { type: "submit" },
  text: "Submit",
};

export const cancelButtonParams = {
  class: ["bg-green-500", "px-4", "py-2"],
  tagName: "button",
  attr: { type: "reset" },
  text: "Cancel",
};
