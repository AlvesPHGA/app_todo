export default function clean_todo() {
  const c_list = document.querySelector(".clean_list");

  c_list.addEventListener("click", all_clean);

  function all_clean() {
    const list_todo = document.querySelector("ul");

    while (list_todo.firstChild) list_todo.removeChild(list_todo.firstChild);
  }
}
