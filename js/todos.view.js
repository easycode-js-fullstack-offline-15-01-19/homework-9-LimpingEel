class TodosView {
  constructor() {
    this.__table = uiElements.table;
  }
  addTodo(todo) {
    const template = TodosView._createTemplate(todo);
    this.__table.insertAdjacentHTML('afterbegin', template);
  }
  deleteTodo(id) {
    const target = document.querySelector(`[data-task-id="${id}"]`);
    this.__table.removeChild(target);
  }
  static _createTemplate(todo) {
    return `
        <tr data-task-id="${todo.id}">
            <td>${todo.title}</td>
            <td>${todo.text}</td>
            <td><i class="fas fa-trash remove-task"></i></td>
        </tr>
    `;
  }
}