import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  template: `
    <div class="col-xs-6">
            <label class="i-checks" style="padding-left: 20px">
            <input (change)="toggleAllCompleted.emit($event.target.checked)" id="chk-allComplete" type="checkbox"><i></i><span>Mark all as complete</span>
            </label>
          </div>
          <div class="col-xs-6 text-right">
              <button (click)="removeCompletedTodos.emit()" id="btn-removeCompletedTodos" class="btn btn-default btn-xs">Clear completed
               (<span id="completedTodos">{{cntCompletedTodos}}</span>)</button>
              <strong id="leftTodos">{{cntLeftTodos}}</strong> items left
          </div>
  `,
  styles: []
})
export class TodoFooterComponent implements OnInit {
  @Input () cntCompletedTodos : Number;
  @Input () cntLeftTodos : Number;
  @Output () toggleAllCompleted = new EventEmitter();
  @Output () removeCompletedTodos = new EventEmitter();
  ngOnInit() {
  }

}
