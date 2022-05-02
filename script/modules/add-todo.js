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

    const score = document.querySelector("[data-score]");

    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = item;

    li.setAttribute("data-todo", "");
    li.setAttribute("name", "todo");

    li.appendChild(span);

    ul.appendChild(li);

    score.innerHTML = list.length;
  }

  function all_clean() {
    const list_todo = document.querySelector("ul");
    const score = document.querySelector("[data-score]");

    while (list_todo.firstChild) list_todo.removeChild(list_todo.firstChild);

    while (list.length) list.pop();

    score.innerHTML = list.length;
  }
}
