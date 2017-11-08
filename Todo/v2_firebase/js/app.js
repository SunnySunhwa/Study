(function(ax) {
  var $x = ax.create({
    baseURL: 'https://todolist-sunny.firebaseio.com/todos'
  });


  let todos;
  let status = 'all';

  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');
	const completedTodos = document.getElementById('completedTodos');
	const leftTodos = document.getElementById('leftTodos');



		const filterByStatus = function (){
			//사용하는 값은 todo의 completed밖에 없기 때문에 distructuring
			 return todos.filter(( { completed } ) => {
				 switch (status){
					 case 'active' : return !completed
					 case 'completed' : return completed;
					 //all일 경우 모든 todos를 그대로 반환해야함-> filter를 거치기 위해 true로
					 default : return true; 
				 }
			 });
		};
		

		const countCompletedTodos = function(){
			return (todos.filter(( {completed} ) => completed)).length;
		};
		
		
		const countLeftTodos = function(){
			return (todos.filter(( {completed} ) => !completed)).length;	
		};

    const render = function() {
        let html = '';
				const _todos = filterByStatus();
        _todos.forEach(({id, content, completed
        }) => {
            const checked = completed ? ' checked' : '';

            html += `<li class="list-group-item"> 
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
          </a>
          <label class="i-checks" for="${id}">
            <input type="checkbox" id="${id}"${checked}><i></i>
            <span>${content}</span>
          </label>
        </div>
      </li >`;
        });
				completedTodos.innerHTML = countCompletedTodos();
				leftTodos.innerHTML = countLeftTodos();
        todoList.innerHTML = html;
    };

    const getTodos = function() {
      //베이스 url뒤에 붙는것만 써주면 됨
        $x.get('.json')
          .then((res) => {
            todos = res.data;
            render();
            console.log('[GET]\n', todos);}) 
        .catch((err) => {console.log(err)});
        
    };



    const lastTodoId = function() {
        return todos ? Math.max(...todos.map(({id }) => id)) + 1 : 1;
    };

    const addTodo = function() {
        const content = inputTodo.value;
        inputTodo.value = '';
        const temp = { id: lastTodoId(), content, completed: false };
        //baseURL 뒤에 새로운 데이터는 /인덱스값이 오는데, 인덱스값 !== id 임.
        $x.put(`/${(todos.length)}.json`, temp)
          .then((res) => { 
            todos.push(temp);
            render(); 
            console.log('[ADD]\n', todos);
          })
        .catch((err) => {console.log(err)});

      /*  todos 전체를 다시 만드는 방법 (서버와 맞지 않음) 
       if (!todos || todos.length === 0) {
            todos = [{ id: 1, content, completed: false }];
        } else {
            todos = [{id: lastTodoId(), content, completed: false}].concat(todos);
        }
 */      
    };

    const toggleTodoComplete = function(id) {
        todos = todos.map(todo => (
            todo.id === (+id) ? Object.assign({}, todo, {
                completed: !todo.completed
            }) : todo
        ));
        render();
        console.log('[TOGGLE-COMP]\n', todos);
    };
		const toggleTodoAllComplete = function (checked) {
				todos = todos.map(({ id, content }) => ({ id, content, completed: checked }));
				render();
				console.log('[TOGGLE-A-COMP]\n', todos);
			};


    const removeTodo = function(id) {
        todos = todos.filter(todo => todo.id !== (+id));
        render();
        console.log('[REMOVE]\n', todos);
		};
		


	const removeCompletedTodo = function(){
		// filter의 리턴값을 true로 해주기위해 !completed
		// completed만 쓸것이고, completed를 덮어쓰지 않을 것이기 때문에 distructuring 가능
		todos = todos.filter(( { completed } ) => !completed );
		render();
		console.log('[RM-COMP]\n', todos);
		};
	


    inputTodo.addEventListener('keyup', (e) => {
        if (e.keyCode !== 13 || inputTodo.value.trim() === '') {
            return;
        }
        addTodo();
    });

    window.addEventListener('load', () => {
        getTodos();
    });

    todoList.addEventListener('change', (e) => {
        toggleTodoComplete(e.target.id);
    });

    todoList.addEventListener('click', ({ target }) => {
        if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') {
            return;
        }
        removeTodo(target.dataset.id);
    });



    //childNode는 엔터까지 노드로 치는 반면에, children은 element요소만
    // 탭 전체에서 active클래스 빼기
    document.querySelector('.nav').addEventListener('click', (e) => {
        if(!e.target || e.target.nodeName  !== 'A') return; //방어코드
        const lis = e.currentTarget.children;
        [...lis].forEach((el)=>{el.classList.remove('active')
    });

    // 선택한 탭에만 active클래스 추가
    const targetLi = e.target.parentNode;
    targetLi.classList.add('active');

    // 선택한 탭의 id값 가져오기
    status = targetLi.id;
		//console.log(status);

		render();

		});

		document.getElementById('chk-allComplete').addEventListener('change', (e) => {
			toggleTodoAllComplete(e.target.checked);
		});

		document.getElementById('btn-removeCompletedTodos').addEventListener('click', removeCompletedTodo);
		}(axios));