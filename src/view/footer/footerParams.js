export const footerParams = {
  class: ["static"],
  tagName: "footer",
};

export const containerParams = {
  class: ["border-t-2", "p-5", "flex", "justify-end"],
  tagName: "div",
};

export const linkParams = {
  class: ["link", "flex", "gap-2", "items-center"],
  tagName: "a",
  attr: {
    href: "https://github.com/mikhailbalyberdin/task-manager.git",
    target: "blank",
  },
};

export const linkTextParams = {
  class: ["dark:text-white"],
  tagName: "span",
  text: "mikhailbalyberdin",
};

export const iconParams = {
  class: [
    "block",
    "w-5",
    "h-5",
    "min-[400px]:w-10",
    "min-[400px]:h-10",
    "icon",
    "bg-cover",
  ],
  tagName: "span",
};
