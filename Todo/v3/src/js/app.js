import axios from 'axios';

(function () {
  let todos;
  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  const render = function () {
    let html = '';

    todos.forEach(({ id, content, completed }) => {
      const checked = completed ? 'checked' : '';

      html += `<li class="list-group-item"> 
        <div class="hover-anchor"> 
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
          </a>
          <label class="i-checks" for="${id}">
            <input type="checkbox" id="${id}" ${checked}><i></i>
            <span>${content}</span>
          </label>
        </div>
      </li>`;
    });

    todoList.innerHTML = html;
  };

  const maxId = function () {
    return todos.length === 0 ?
      1 : Math.max.apply(null, todos.map(todo => todo.id)) + 1;
  };

  const getTodos = function () {
    axios.get('/todos')
      .then(res => {
        todos = res.data;
        console.log(todos);
        render();
        console.log('[get]\n', todos);
      })
      .catch(err => console.log(err.response));
  };

  const addTodo = function () {
    const content = inputTodo.value;
    inputTodo.value = '';

    let todo;

    if (!todos || !todos.length) {
      todo = { id: 1, content, completed: false };
    } else { todo = { id: maxId(), content, completed: false }; }

    axios.post('/todos', todo)
      .then(res => {
        console.log('[ADD]\n', res.data);
        getTodos();
      })
      .catch(err => console.log(err.response));
  };

  const removeTodo = function (id) {
    axios.delete(`/todos/${id}`)
      .then(res => {
        console.log('[DELETE]\n', res.data);
        getTodos();
      })
      .catch(err => console.log(err.response));
  };


  const toggle = function (id) {
    const { completed } = todos.find(todo => todo.id == id);
    axios.patch(`/todos/${id}`, { completed: !completed })
      .then(() => {
        console.log('[TOGGLE]\n',id);
        getTodos();
      })
      .catch(err => console.log(err.response));
  };

  window.addEventListener('load', () => getTodos());

  inputTodo.addEventListener('keyup', e => {
    if (e.keyCode !== 13) return;
    addTodo();
  });

  todoList.addEventListener('change', e => {
    toggle(e.target.id); 
  });

  todoList.addEventListener('click', e => {
    if (!e.target || e.target.nodeName !== 'SPAN' || e.target.parentNode.nodeName == 'LABEL') return;
    removeTodo(e.target.dataset.id);
  });
}());
