export const formParams = {
  class: [
    "flex",
    "flex-col",
    "items-start",
    "gap-10",
    "border-2",
    "border-solid",
    "border-black",
    "absolute",
    "z-2",
    "top-1/2",
    "left-1/2",
    "-translate-1/2",
    "max-w-1/2",
    "w-full",
  ],
  tagName: "form",
};
export const inputContainerParams = {
  class: ["flex", "justify-start", "gap-x-10", "border-b-1"],
  tagName: "div",
};

export const inputTextParams = {
  class: ["focus:outline-none"],
  tagName: "input",
  attr: { type: "text", id: "note", name: "title", placeholder: "Add Title" },
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
  class: [
    "w-full",
    "focus:shadow-[5px_5px_5px_rgba(0,0,0,0.25)]",
    "focus:outline-none",
  ],
  attr: { name: "note", placeholder: "Add note" },
  tagName: "textarea",
};

export const buttonContainerParams = {
  class: ["w-full", "flex", "justify-end"],
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

export const fadeBlockParams = {
  class: [
    "z-1",
    "w-screen",
    "h-screen",
    "bg-red-200/25",
    "backdrop-blur-sm",
    "fixed",
    "top-0",
    "left-0",
  ],
  tagName: "div",
};
