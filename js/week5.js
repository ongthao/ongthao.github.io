window.onload = function() {
  const todoList = document.querySelector('ul');
  const input = document.querySelector('input');
  const addButton = document.querySelector('button');

  addButton.onclick = function() {
    const listTodo = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listTodo.appendChild(listText);
    listTodo.classList.add('todo-li');
    listText.textContent = input.value;
    listButton.textContent = 'Delete';
    listButton.classList.add('todo-delete-btn');
    listTodo.appendChild(listButton);
    todoList.appendChild(listTodo);

    listButton.onclick = function(e) {
      todoList.removeChild(listTodo);
    }
  }
}