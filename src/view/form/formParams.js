export const formParams = {
  class: [
    "max-w-md",
    "w-full",
    "flex",
    "flex-col",
    "items-start",
    "p-10",
    "gap-5",
    "border-none",
    "rounded-md",
    "absolute",
    "z-2",
    "top-1/2",
    "left-1/2",
    "-translate-1/2",
    "bg-white",
  ],
  tagName: "form",
  attr: { id: "form" },
};

export const topContainerParams = {
  class: ["w-full", "flex", "justify-between"],
  tagName: "div",
};

export const midContainerParams = {
  class: ["w-full"],
  tagName: "div",
};

export const titleLabelParams = {
  class: [],
  tagName: "label",
  attr: { for: "note" },
  text: "Title:",
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

export const inputTextParams = {
  class: [
    "w-full",
    "block",
    "focus:border-blue-500",
    "focus:outline-none",
    "rounded-md",
    "p-3",
    "bg-gray-500/10",
    "focus:shadow-[0px_0px_10px_rgba(0,0,0,0.25)]",
    "transition",
    "delay-150",
  ],
  tagName: "input",
  attr: { type: "text", id: "note", name: "title", placeholder: "Add Title" },
};

export const textAreaParams = {
  class: [
    "w-full",
    "max-h-1/4",
    "h-full",
    "bg-gray-500/10",
    "rounded-md",
    "p-3",
    "focus:shadow-[0px_0px_10px_rgba(0,0,0,0.25)]",
    "focus:outline-none",
    "transition",
    "delay-150",
  ],
  attr: { name: "note", placeholder: "Add note" },
  tagName: "textarea",
};

export const buttonContainerParams = {
  class: ["w-full", "flex", "justify-end", "gap-5"],
  tagName: "div",
};

export const submitButtonParams = {
  class: ["bg-green-500", "px-4", "py-2", "rounded-md", "max-w-50", "truncate"],
  tagName: "button",
  attr: { type: "submit", id: "submit" },
  text: "Submit",
};

export const cancelButtonParams = {
  class: ["bg-red-500", "px-4", "py-2", "rounded-md", "max-w-50", "truncate"],
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
