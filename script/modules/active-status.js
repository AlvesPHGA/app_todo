export default function active_status() {
  const active = document.querySelectorAll("[data-status]");

  const link_active = document.querySelector(".status");

  const todo = document.querySelectorAll("[data-todo]");

  active[0].classList.add("__active");

  link_active.addEventListener("click", (e) => {
    status_active(e);
  });

  function status_active(e) {
    active.forEach((i) => {
      i.classList.remove("__active");
    });

    e.target.classList.add("__active");

    show_todo(e);
  }

  function show_todo(e) {
    const all = document.querySelectorAll("[data-todo]");
    const active = document.querySelectorAll(".__active");
    const completed = document.querySelectorAll(".__completed");

    const el = e.target.dataset.status;

    switch (el) {
      case "all":
        all.forEach((i) => {
          i.classList.remove("__hidden");
        });
        break;

      case "active":
        completed.forEach((i) => {
          i.classList.add("__hidden");
        });
        active.forEach((i) => {
          i.classList.remove("__hidden");
        });
        break;

      case "completed":
        active.forEach((i) => {
          i.classList.add("__hidden");
        });
        completed.forEach((i) => {
          i.classList.remove("__hidden");
        });
    }
  }
}
