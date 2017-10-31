/*eslint-disable */
var todos;

var inputTodo = document.getElementById('input-todo');
var todoList = document.getElementById('todo-list');

window.addEventListener('load', function() {
  getTodos();
});

var getTodos = function() {
  todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  render();
  console.log(todos[0].id);
}

var render = function() {
  var html = '';
  todos.forEach(function(todo) {
    var checked = todo.completed ? 'checked' : '';
    html += '<li class="list-group-item"> \
      <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + checked + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
  });

  todoList.innerHTML = html;
};


var addTodo = function () {
  var content = inputTodo.value;
  todos.unshift({ id: (todos.length+1), content : content, completed: false });
  inputTodo.value = '';
 render();
};

inputTodo.addEventListener('keyup', function (e) {
  if (e.keyCode !== 13) return;
  addTodo();
});





todoList.addEventListener('click', function (e) {
  if (e.target.parentNode.nodeName !== 'LABEL' && e.target.nodeName == 'SPAN'){
    removeTodo = function (id) {
      var id = e.target.dataset.id;
      todos = todos.filter(function (todo) {
        return todo.id != id;
      });
      render();
    }
    removeTodo();
  }

 

});


/* 

  var lastTodoId = function () {
    return todos ? Math.max.apply(null, todos.map(function (todo) {
      return todo.id;
    })) + 1 : 1;
  } */