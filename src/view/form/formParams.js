export const formParams = {
  class: [
    "flex",
    "flex-col",
    "items-start",
    "p-10",
    "gap-10",
    "border-none",
    "rounded-md",
    "absolute",
    "z-2",
    "top-1/2",
    "left-1/2",
    "-translate-1/2",
    "max-w-1/4",
    "max-h-100",
    "h-full",
    "w-full",
    "bg-white",
  ],
  tagName: "form",
};
export const inputContainerParams = {
  class: ["flex", "justify-start", "gap-x-10"],
  tagName: "div",
};

export const containerParams = {
  class: ["flex", "flex-col", "gap-3"],
  tagName: "div",
};

export const titleLabelParams = {
  class: ["block"],
  tagName: "label",
  text: "Title:",
};

export const inputTextContainerParams = {
  class: ["max-w-100", "w-full", "bg-gray-500/10", "rounded-md"],
  tagName: "div",
};

export const inputTextParams = {
  class: [
    "w-full",
    "block",
    "focus:border-blue-500",
    "focus:outline-none",
    "rounded-md",
    "p-3",
    "focus:shadow-[5px_5px_5px_rgba(0,0,0,0.25)]",
  ],
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
    "h-full",
    "bg-gray-500/10",
    "rounded-md",
    "p-3",
    "focus:shadow-[5px_5px_5px_rgba(0,0,0,0.25)]",
    "focus:outline-none",
  ],
  attr: { name: "note", placeholder: "Add note" },
  tagName: "textarea",
};

export const buttonContainerParams = {
  class: ["w-full", "flex", "justify-center", "gap-5"],
  tagName: "div",
};

export const submitButtonParams = {
  class: ["bg-green-500", "px-4", "py-2", "rounded-md"],
  tagName: "button",
  attr: { type: "submit" },
  text: "Submit",
};

export const cancelButtonParams = {
  class: ["bg-red-500", "px-4", "py-2", "rounded-md"],
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
