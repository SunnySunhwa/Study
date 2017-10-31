/*eslint-disable */
(function() {
  var inputTodo = document.getElementById('input-todo');
  var todoList = document.getElementById('todo-list');

  var addTodo = function() {
    var content = inputTodo.value;
    inputTodo.value = '';

    todoList.innerHTML += '<li>' + content + '</li>';
  };

  inputTodo.addEventListener('keyup', function(e) {
    if (e.keyCode !== 13) return;
    addTodo();
  });

  todoList.addEventListener('click', function(e) {
    if (!e.target || e.target.nodeName !== 'LI') return;
    e.target.parentNode.removeChild(e.target);
  });

}());