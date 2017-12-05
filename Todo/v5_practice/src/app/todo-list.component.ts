import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoFilterPipe } from './todo-filter.pipe';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  template: `
     <ul id="todo-list" class="list-group">
            <li *ngFor= "let todo of todos | todoFilter : selectedNavItem" class="list-group-item">
              <div class="hover-anchor">
                <a class="hover-action text-muted">
                  <span class="glyphicon glyphicon-remove-circle pull-right" (click)="removeTodo.emit(todo.id)"></span>
                </a>
                <label class="i-checks" [for]="todo.id">
                  <input type="checkbox" [id]="todo.id" [checked]="todo.completed" (change)="toggle.emit(todo.id)"><i></i>
                  <span>{{todo.content}}</span>
                </label>
              </div>
            </li>
          </ul>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() selectedNavItem : string;
  @Output() removeTodo = new EventEmitter();
  @Output() toggle = new EventEmitter();


  ngOnInit() {
  }

}
