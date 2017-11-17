import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-container',
  template: `
        <div class="container">
        <div class="row">
           <div class="col-md-8 col-md-offset-2">
                <h1 class="title">Todos</h1>
                <todo-form [content]="content" (addTodo)= "addTodo($event)"></todo-form>
                <todo-nav
                [navItems] ="navItems"
                [selectedNavItem] ="selectedNavItem"
                (setCurrentNavItem) ="setCurrentNavItem($event)"
                ></todo-nav>
                
                <todo-list
                [todos] = "todos"
                [selectedNavItem] = "selectedNavItem"
                (removeTodo)= "removeTodo($event)"
                (toggleTodo)= "toggleTodo($event)"></todo-list>
                <todo-footer 
                [cntGetCompleted] = "getCompletedTodos()"
                [cntLeft] = "leftTodos()"
                (toggleAllTodoAsCompleted)= "toggleAllTodoAsCompleted($event)"
                (removeCompletedTodos)= "removeCompletedTodos($event)">
                </todo-footer>
                
            </div>
        </div>
        <pre>{{ todos | json }}</pre>
    </div>
  `,
  styles: []
})
export class TodoContainerComponent implements OnInit {

  todos : Todo[];
  content: string;
  navItems: string[];
  selectedNavItem: string;
  
  ngOnInit() {
    this.todos = this.getTodos();
    this.navItems = ['All', 'Active', 'Completed'];
    this.selectedNavItem = this.navItems[0];
    
  }

  getTodos() {
    return [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javscript', completed: false }
    ];
  }

  setCurrentNavItem(navItem) {
    this.selectedNavItem = navItem;
  }


  addTodo(content) {
    this.todos = [...this.todos, ({ id: this.getId(), content, completed: false })];
  }

  getId() {
    return this.todos ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }


  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id) {
    this.todos = this.todos.map(todo => (
      todo.id === (+id) ?
        Object.assign({}, todo, { completed: !todo.completed }) : todo
    ));
}

  toggleAllTodoAsCompleted(checked) {
    this.todos = this.todos.map(({ id, content }) => ({ id, content, completed: checked }));
  }

  removeCompletedTodos() {
    this.todos = this.todos.filter(({ completed }) => !completed);
  }
  
  getCompletedTodos() {
    return this.todos.filter(({ completed }) => completed).length;
  }
  leftTodos() {
    return this.todos.filter(({ completed }) => !completed).length;
  }

}