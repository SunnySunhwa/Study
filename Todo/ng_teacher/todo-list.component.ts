import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos | todoFilter: status">
        <span>{{ todo.content }}</span>
        <button (click)="removeTodo.emit(todo.id)">x</button>
      </li>
    </ul>
    <pre>{{ todos | json }}</pre>
    <pre>{{ status }}</pre>
  `,
  styles: [`
    span {
      display: inline-block;
      width: 50px;
    }
  `]
})
export class TodoListComponent {

  @Input() todos: Todo[];
  @Input() status: string;
  @Output() removeTodo = new EventEmitter();
}
