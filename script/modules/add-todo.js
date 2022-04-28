export default function add_todo() {
  const form = document.querySelector("form");
  const list = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const item = form.querySelector("[data-newTodo]").value;

    clean();
    // add_item(item);
  });

  function clean() {
    form.reset();
  }

  //   function add_item(item) {
  //     let ul = document.querySelector("ul");
  //     const li = document.createElement("li");
  //     list.push(item);

  //     ul = `<li data-todo>
  //     <input type="radio" name="todo" id="">
  //     <span>Complete online JavaScript course</span>
  //     </li>`;

  //     list.map((i) => {});

  //     console.log(ul);
  //   }
}
