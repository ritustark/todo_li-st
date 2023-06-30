const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const darkModeCheckbox = document.getElementById("dark-mode-checkbox");

addButton.addEventListener("click", function() {
  const task = todoInput.value;
  if (task) {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.addEventListener("click", function() {
      listItem.classList.toggle("completed");
    });
    todoList.appendChild(listItem);
    todoInput.value = "";
  }
});

darkModeCheckbox.addEventListener("change", function() {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".container").classList.toggle("dark-mode");
  document.querySelector("h1").classList.toggle("dark-mode");
  addButton.classList.toggle("dark-mode");
  todoList.querySelectorAll("li").forEach(function(item) {
    item.classList.toggle("dark-mode");
  });
});
