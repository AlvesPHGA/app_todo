export default function change_color() {
  const icon_img = document.querySelector("[data-change]");

  icon_img.addEventListener("click", change);

  function change() {
    change_icon();
    change_backColor();
  }

  function change_icon() {
    const icons = icon_img.querySelectorAll("img");

    icons.forEach((i) => {
      i.classList.toggle("__hidden");
    });
  }

  function change_backColor() {
    const body = document.querySelector("body");
    const subheader = document.querySelector(".subheader");
    const input = subheader.querySelector(".new_todo");

    const ul = document.querySelector("ul");

    const utils = [body, subheader, input, ul];

    utils.forEach((i) => {
      i.classList.toggle("__active");
    });
  }
}
