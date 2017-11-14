import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  template: `
    <input type="text" [(ngModel)]="content" (keyup.enter)="onInput()">
  `
})
export class TodoFormComponent {
  content: string;
  @Output() inputTodo = new EventEmitter();

  onInput() {
    this.inputTodo.emit(this.content);
    this.content = '';
  }
}
