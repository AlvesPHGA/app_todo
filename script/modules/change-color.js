export default function change_color() {
  const icon_img = document.querySelector("[data-change]");

  icon_img.addEventListener("click", change);

  function change() {
    const icons = icon_img.querySelectorAll("img");

    icons.forEach((i) => {
      i.classList.toggle("__hidden");
    });

    change_back_sub();
  }

  function change_back_sub() {
    const body = document.querySelector("body");
    const subheader = document.querySelector(".subheader");
    const input = subheader.querySelector(".new_todo");

    const ul = document.querySelector("ul");

    const utils = [body, subheader, input, ul];

    utils.forEach((i) => {
      i.classList.toggle("__active");
    });
  }

  function change_body_backColor() {
    const body = document.querySelector("body");
    body.classList.toggle("__active");
  }
}
