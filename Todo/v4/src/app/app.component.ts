import { TodoFilterPipe } from './todo-filter.pipe';
import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1 class="title">Todos</h1>
                <input class="form-control input-lg" placeholder="What needs to be done?"
                autofocus [(ngModel)]="content" (keyup.enter)="addTodo()">
                <ul class="nav nav-xs nav-pills">
                    <li *ngFor = "let navItem of navItems" [class.active]="navItem === selectedNavItem">
                        <a (click)="setCurrentNavItem(navItem)">{{navItem}}</a>
                    </li>
                </ul>
                <ul id="todo-list" class="list-group">
                 <li *ngFor = "let todo of (todos | todoFilter : selectedNavItem)" class="list-group-item">
                    <div class="hover-anchor">
                      <a class="hover-action text-muted">
                        <span class="glyphicon glyphicon-remove-circle pull-right" (click)="removeTodo(todo.id)"></span>
                      </a>
                      <label class="i-checks" [for]="todo.id">
                        <input type="checkbox" [id]="todo.id" [checked]="todo.completed" (change)="toggle(todo.id)"><i></i>
                        <span>{{todo.content}}</span>
                      </label>
                    </div>
                  </li>
                </ul>
                <div class="col-xs-6">
                    <label class="i-checks" style="padding-left: 20px">
            <input id="chk-allComplete" type="checkbox" (change)="toggleAllTodoAsCompleted($event.target.checked)" ><i></i><span>Mark all as complete</span>
          </label>
                </div>
                <div class="col-xs-6 text-right">
                    <button (click)="removeCompletedTodos()" class="btn btn-default btn-xs">Clear completed (<span>{{getCompletedTodos()}}</span>)</button>
                    <strong>{{leftTodos()}}</strong> items left
                </div>
            </div>
        </div>
        <pre>{{ todos | json }}</pre>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit{
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
  };

  addTodo() { 
    this.todos = [...this.todos, ({ id: this.getId(), content: this.content, completed: false })];
    this.content = '';    
  }
  
  getId() {
    return this.todos ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  setCurrentNavItem(navItem) {
    this.selectedNavItem = navItem;
  }

  toggle(id) {
    this.todos = this.todos.map(todo => (
      todo.id === (+id) ? Object.assign({}, todo, {
        completed: !todo.completed
      }) : todo
    ));
  }

  toggleAllTodoAsCompleted(checked) {
    this.todos = this.todos.map(({ id, content }) => ({ id, content, completed: checked }));
  }

  removeCompletedTodos(){
    this.todos = this.todos.filter(({completed}) => !completed);
  }
  getCompletedTodos(){
    return this.todos.filter(({completed}) => completed).length;
  }
  leftTodos(){
    return this.todos.filter(({completed}) => !completed).length;
  }