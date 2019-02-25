// Init Todos
const todos = new Todos();
// Init TodosView
const todosView = new TodosView();
// Init ui elements
const { table, form, title, text } = uiElements;

// Events
title.addEventListener("keyup", toogleDisabled);
form.addEventListener("submit", onSubmit);
table.addEventListener("click", onClick)

// Handlers
function toogleDisabled(e) {
  text.disabled = !title.value
}
function onSubmit(e) {
  e.preventDefault();

  if (!title.value || !text.value) return;
  const newTodo = todos.addTodo(title.value, text.value);
  todosView.addTodo(newTodo);
  // alertMesssage(false, 'Задача добавлена успешно');
  form.reset();
  toogleDisabled();
}

function onClick(e) {
	if (e.target.classList.contains('remove-task')) {
        const id = e.target.closest("[data-task-id]").dataset.taskId;
        todosView.deleteTodo(id);
    }
}

// table.addEventListener("click", function (e) {
//     if (e.target.classList.contains('remove-task')) {
//         const id = e.target.closest("[data-task-id]").dataset.taskId;
//         deleteItemfromStorage(id) && deleteTodoFromView(id);
//     }
// });