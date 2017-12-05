import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-container',
  template: `
   <div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
         <h1 class="title">Todos</h1>

         <app-todo-form [content]="content" (addTodo)="addTodo($event)"></app-todo-form>


         <app-todo-nav
         [navItems]= "navItems"
         [selectedNavItem]= "selectedNavItem"
         (setCurrentNavItem)= "setCurrentNavItem($event)"
         ></app-todo-nav>


         <app-todo-list
          [todos]= "todos"
          [selectedNavItem]= "selectedNavItem"
          (toggle)= "toggle($event)"
          (removeTodo)= "removeTodo($event)"
         ></app-todo-list>


         <app-todo-footer
         [cntCompletedTodos] = "completedTodos()"
         [cntLeftTodos] = "leftTodos()"
         (toggleAllCompleted) = "toggleAllCompleted($event)"
         (removeCompletedTodos) = "removeCompletedTodos()"
         ></app-todo-footer>
        </div>
      </div>
      <pre>{{ todos | json }}</pre>
    </div>
  `,
  styles: []
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  navItems: string[];
  selectedNavItem: string;
  content: string;

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
  };

  addTodo(content) {
    this.todos = [...this.todos, ({ id: this.getId(), content, completed: false })];
  };

  getId() {
    return this.todos ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  };

  setCurrentNavItem(navItem) {
    this.selectedNavItem = navItem;
  };

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
  toggle(id) {
    this.todos = this.todos.map(todo => (
      todo.id === (+id) ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
  };

  toggleAllCompleted(checked) {
    this.todos = this.todos.map(({ id, content }) => ({ id, content, completed: checked }));

  };
  removeCompletedTodos() {
    this.todos = this.todos.filter(({ completed }) => completed == false);
  };
  completedTodos() {
    return (this.todos.filter(({ completed }) => completed === true)).length;
  };
  leftTodos() {
    return (this.todos.filter(({ completed }) => completed === false)).length;
  };

}
