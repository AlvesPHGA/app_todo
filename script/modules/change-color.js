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
    const subheader = document.querySelector(".subheader");

    subheader.classList.toggle("__active");
  }
}
