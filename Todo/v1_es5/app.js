(function () {
    var todos;
    var inputTodo = document.getElementById('input-todo');
    var todoList = document.getElementById('todo-list');

    var getTodo = function(){
        todos = [
        { id: 3, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 1, content: 'Javascript', completed: false }];
        render();
        console.log('[get]\n', todos);
    };

    var addTodo = function(){
        var content = inputTodo.value;
        inputTodo.value = '';

        if (!todos) { todos = [{ id: 1, content: content, completed: false }];}
        else { todos = [{ id: lastId(), content: content, completed: false }].concat(todos);}
        render();
        console.log('[add]\n', todos);
    }

    var lastId = function(id){
        return todos ? Math.max.apply(null, todos.map(function(todo){ return todo.id })) + 1: 1;
    };

    var toggle = function(id){
     todos = todos.map(function(todo){
          return todo.id == id ? Object.assign({}, todo, {completed: !todo.completed}) : todo;
      });
      render();
      console.log('[toggle]\n', todos);
    };

    var remove = function(id){
        todos = todos.filter(function(todo){
            
            return todo.id !== +id});
            render();
            console.log('[remove]\n', todos);
    };
    var render = function(){
        var html = '';
        todos.forEach(function(todo){
            var checked = todo.completed ? 'checked' : '';

            html += '<li class="list-group-item"> \
      <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + ((todo.completed) ? 'checked' : '') + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
        })
        todoList.innerHTML = html;
    };


    window.addEventListener('load',function(){
        getTodo();
    });
    inputTodo.addEventListener('keyup', function(e){
        if(e.keyCode !== 13) return;
        addTodo();
    });

    todoList.addEventListener('change', function(e){
        toggle(e.target.id);
    });

    todoList.addEventListener('click', function(e){
        if(!e.target || e.target.nodeName !== 'SPAN'|| e.target.parentNode.nodeName == 'LABEL'){
            return;
        }else{remove(e.target.dataset.id);}
    });
})(); //IIFE