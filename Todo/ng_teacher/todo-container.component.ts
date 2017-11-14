import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-container',
  template: `
    <todo-form (inputTodo)="addTodo($event)"></todo-form>
    <todo-select
      [navItems]="navItems"
      (changeStatus)="status=$event">
    </todo-select>
    <todo-list
      [todos]="todos"
      [status]="status"
      (removeTodo)="removeTodo($event)">
    </todo-list>
  `
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  navItems: string[];
  status: string;

  ngOnInit() {
    this.todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'JS', completed: false }
    ];
    this.navItems = ['All', 'Active', 'Completed'];
  }

  addTodo(content) {
    this.todos = [...this.todos, { id: this.lastTodoId(), content, completed: false }];
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  private lastTodoId(): number {
    return this.todos ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }
}