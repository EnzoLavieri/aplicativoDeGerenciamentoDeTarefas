document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const editDialog = document.getElementById("edit-dialog");
  const editForm = document.getElementById("edit-form");
  const cancelButton = document.getElementById("cancel-button");
  const filterInput = document.getElementById("filter-input");
  const filterButton = document.getElementById("filter-button");
  let currentEditIndex = null;

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(todoForm);
    const title = formData.get("title");
    const description = formData.get("description");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.push({ title, description });

    localStorage.setItem("todos", JSON.stringify(todos));

    todoForm.reset();

    displayTodos();
  });

  filterButton.addEventListener("click", function () {
    displayTodos(filterInput.value);
  });

  cancelButton.addEventListener("click", function () {
    editDialog.close();
  });

  editForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(editForm);
    const title = formData.get("edit-title");
    const description = formData.get("edit-description");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    if (currentEditIndex !== null) {
      todos[currentEditIndex] = { title, description };
      localStorage.setItem("todos", JSON.stringify(todos));
      displayTodos();
      editDialog.close();
    }
  });

  function displayTodos(filter = "") {
    const todoList = document.getElementById("todo-list");
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    todoList.innerHTML = "";

    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(filter.toLowerCase())
    );

    filteredTodos.forEach((todo, index) => {
      const listItem = document.createElement("li");
      const titleHeading = document.createElement("h2");
      titleHeading.textContent = todo.title;
      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = todo.description;

      const editButton = document.createElement("button");
      editButton.textContent = "✏️";
      editButton.classList.add("edit-button");
      editButton.title = "Editar tarefa";
      editButton.addEventListener("click", function () {
        currentEditIndex = index;
        editDialog.showModal();
        editForm.elements["edit-title"].value = todo.title;
        editForm.elements["edit-description"].value = todo.description;
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.classList.add("delete-button");
      deleteButton.title = "Excluir tarefa";
      deleteButton.addEventListener("click", function () {
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        displayTodos(filter);
      });

      listItem.appendChild(titleHeading);
      listItem.appendChild(descriptionParagraph);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);

      todoList.appendChild(listItem);
    });
  }

  displayTodos();
});
