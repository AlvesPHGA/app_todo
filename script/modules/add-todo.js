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
    // todo_checked();
  }

  function clean() {
    form.reset();
  }

  function add_item(item) {
    list.push(item);

    const score = document.querySelector("[data-score]");

    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const span = document.createElement("span");

    label.textContent = item;
    span.textContent = "X";

    li.setAttribute("data-todo", "");
    li.setAttribute("name", "todo");

    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "todo");

    span.setAttribute("class", "delete");

    input.setAttribute("id", `${list.length}`);
    input.setAttribute("value", `${item}`);

    label.setAttribute("for", `${list.length}`);

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(span);

    ul.appendChild(li);

    score.innerHTML = list.length;

    span.onclick = change_score;

    function change_score(item) {
      let item_todo = list.indexOf(item);

      item.currentTarget.closest("li").remove(list.splice(item_todo, 1));

      score.innerHTML = list.length;
    }

    let l_todo = document.querySelectorAll("label");

    l_todo.forEach((i) => {
      i.addEventListener("click", (e) => {
        e.target.closest("li").setAttribute("data-completed", "");
      });
    });
  }

  function all_clean() {
    const list_todo = document.querySelector("ul");
    const score = document.querySelector("[data-score]");

    while (list_todo.firstChild) list_todo.removeChild(list_todo.firstChild);

    while (list.length) list.pop();

    score.innerHTML = list.length;
  }

  function todo_checked() {
    const todo = document.querySelectorAll("label");

    todo.forEach((i) => {
      console.log(i.innerHTML);

      if (i.style.textDecoration === "line-through") {
        alert(true);
      } else {
        alert(false);
      }
    });
    // todo.checked;

    // console.log(todo);
  }
}
