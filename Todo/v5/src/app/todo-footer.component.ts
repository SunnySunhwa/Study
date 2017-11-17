import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'todo-footer',
  template: `
    <div class="col-xs-6">
      <label class="i-checks" style="padding-left: 20px">
        <input id="chk-allComplete" type="checkbox" (change)="toggleAllTodoAsCompleted.emit($event.target.checked)" ><i></i><span>Mark all as complete</span>
      </label>
    </div>
    <div class="col-xs-6 text-right">
      <button (click)="removeCompletedTodos.emit()" class="btn btn-default btn-xs">Clear completed (<span>{{cntGetCompleted}}</span>)</button>
      <strong>{{cntLeft}}</strong> items left
    </div>
  `,
  styles: []
})
export class TodoFooterComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() cntLeft: Number;
  @Input() cntGetCompleted: Number;
  @Output() toggleAllTodoAsCompleted = new EventEmitter();
  @Output() removeCompletedTodos = new EventEmitter();
  ngOnInit() {
  }
  
}
