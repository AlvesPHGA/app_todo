export default function active_status() {
  const active = document.querySelectorAll("[data-status]");

  const link_active = document.querySelector(".status");

  const todo = document.querySelector("[data-todo]");

  active[0].classList.add("__active");

  link_active.addEventListener("click", (e) => {
    status_active(e);
  });

  function status_active(e) {
    active.forEach((i) => {
      i.classList.remove("__active");
    });

    e.target.classList.add("__active");

    // show_todo(e);
  }

  function show_todo(e) {
    if (
      e.target.classList.contains("__active") &&
      e.target.innerHTML === "Active"
    )
      console.log(document.get);
  }
}
