import axios from 'axios';

(function() {
  let todos;
  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  const render = function() {
    let html = '';

    todos.forEach(({ id, content, completed }) => {
      const checked = completed ? 'checked' : '';

      html += `<li class="list-group-item"> 
        <div class="hover-anchor"> 
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
          </a>
          <label class="i-checks" for="${id}">
            <input type="checkbox" id="${id}  "${checked}><i></i>
            <span>${content}</span>
          </label>
        </div>
      </li>`;
    });

    todoList.innerHTML = html;
  };

  const getTodos = function() {
    axios.get('/todos')
      .then(res => {
        todos = res.data;
        console.log(todos);
        render();
        console.log('[get]\n', todos);
      })
      .catch(err => console.log(err.response));
  };

  const addTodo = function() {
    const content = inputTodo.value;
    inputTodo.value = '';

    let todo;

    if (!todos || !todos.length) {
      todos = { id: 1, content, completed: false };
    } else { todos = { id: lastId(), content, completed: false }; }

    axios.post('/todos', todo)
      .then(res => {
        console.log('[ADD]\n', res.data);
        getTodos();
      })
      .catch(err => console.log(err.response));
  }

  const lastId = function(id) {
    return todos.length === 0 ?
      1 : Math.max.apply(null, todos.map(todo => todo.id)) + 1;
  };

  /* const lastId = function(id) {
    return todos ? Math.max.apply(null, todos.map(function(todo) { return todo.id })) + 1 : 1;
  }; */



  const toggle = function (id) {
    todos.forEach(todo => {
      todo.completed = todo.id === id ? !todo.completed : todo.completed;
    });
  };

  const remove = function(id) {
    todos = todos.filter(function(todo) {

      return todo.id !== +id
    });
    render();
    console.log('[remove]\n', todos);
  };



  window.addEventListener('load', function() {
    getTodos();
  });
  inputTodo.addEventListener('keyup', function(e) {
    if (e.keyCode !== 13) return;
    addTodo();
  });

  todoList.addEventListener('change', function(e) {
    toggle(e.target.id);
  });

  todoList.addEventListener('click', function(e) {
    if (!e.target || e.target.nodeName !== 'SPAN' || e.target.parentNode.nodeName == 'LABEL') {
      return;
    } else { remove(e.target.dataset.id); }
  });
})(); //IIFE