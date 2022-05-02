export default function add_todo() {
  const form = document.querySelector("form");
  const c_list = document.querySelector(".clean_list");
  const list = [];

  form.addEventListener("submit", event);
  c_list.addEventListener("click", all_clean);

  function event(e) {
    e.preventDefault();
    init();
  }

  function init() {
    const item = form.querySelector("[data-newTodo]").value;

    clean();
    add_item(item);
  }

  function clean() {
    form.reset();
  }

  function add_item(item) {
    list.push(item);

    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = item;

    li.setAttribute("data-todo", "");
    li.setAttribute("name", "todo");

    li.appendChild(span);

    ul.appendChild(li);
  }

  function all_clean() {
    const ul = document.querySelector("ul");
    const last_li = document.querySelector(".last-li");
    const li = ul.querySelectorAll("li");
    // const hasAttr = li.hasAttribute("data-todo");

    // if (ul.firstChild.getAttribute("[data-todo]"))
    //   console.log(ul.removeChild(ul.firstChild));

    console.log((li.dataset = todo));
  }
}
