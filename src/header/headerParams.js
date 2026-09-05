export const headerParams = {
  class: ["border-b-2"],
  tagName: "header",
};

export const logoContainerParams = {
  class: [],
  tagName: "div",
};

export const logoImageParams = {
  class: [
    "block",
    "w-5",
    "h-5",
    "min-[400px]:w-10",
    "min-[400px]:h-10",
    "app-light",
    "bg-cover",
  ],
  tagName: "span",
};

export const logoTextParams = {
  class: ["text-sm", "min-[400px]:text-base"],
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
  attr: { type: "text", name: "search", placeholder: "Search" },
};

export const buttonParams = {
  class: ["w-10", "h-10", "app-button", "bg-cover"],
  tagName: "button",
  attr: { id: "nightMode" },
};

export const containerParams = {
  class: ["flex", "justify-between", "items-center", "p-3"],
  tagName: "div",
};

export const searchContainerParams = {
  class: ["flex", "p-3", "gap-3"],
  tagName: "div",
};
