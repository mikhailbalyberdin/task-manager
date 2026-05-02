export const headerParams = {
  class: ["border-b-2"],
  tagName: "header",
};

export const logoContainerParams = {
  class: [],
  tagName: "div",
};

export const logoImageParams = {
  class: ["block", "w-10", "h-10", "bg-[url(/note.svg)]", "bg-cover"],
  tagName: "span",
};

export const logoTextParams = {
  class: [],
  tagName: "span",
  text: "Notes",
};

export const searchParams = {
  class: [
    "border-1",
    "border-solid",
    "border-gray-500",
    "rounded-md",
    "p-2",
    "focus:outline-none",
  ],
  tagName: "input",
  attr: { type: "text", placeholder: "Search" },
};

export const buttonParams = {
  class: ["w-10", "h-10", "bg-[url(/night-mode-icon.svg)]", "bg-cover"],
  tagName: "button",
  attr: { id: "nightMode" },
};

export const containerParams = {
  class: ["flex", "justify-between", "p-3"],
  tagName: "div",
};

export const searchContainerParams = {
  class: ["flex", "p-3", "gap-3"],
  tagName: "div",
};
