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

  // reset input text
  function clean() {
    form.reset();
  }

  // add new item
  function add_item(item) {
    list.push(item);

    const score = document.querySelector("[data-score]");
    const list_todo = document.querySelector("#todo");

    list_todo.insertAdjacentHTML(
      "afterbegin",
      `<div class="item-todo" data-todo>
      <span class="item">${item}</span>
      <span class='close'>X</span>
      </div>`
    );

    const del_item = document.querySelector(".close");
    const item_todo = document.querySelector("[data-todo]");

    del_item.onclick = del;
    item_todo.onclick = check;

    score.innerHTML = list.length;
  }

  function check(item) {
    item.currentTarget.classList.toggle("__active");
  }

  // delete item
  function del(item) {
    const score = document.querySelector("[data-score]");
    let item_todo = list.indexOf(item);
    item.currentTarget.closest("[data-todo]").remove(list.splice(item_todo, 1));

    score.innerHTML = list.length;
  }

  // delete all item
  function all_clean() {
    const list_todo = document.querySelector("#todo");
    const score = document.querySelector("[data-score]");

    while (list_todo.firstChild) list_todo.removeChild(list_todo.firstChild);

    while (list.length) list.pop();

    score.innerHTML = list.length;
  }
}
