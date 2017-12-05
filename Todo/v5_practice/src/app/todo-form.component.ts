import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
    <input class="form-control input-lg" placeholder="What needs to be done?"
                autofocus [(ngModel)]= "content" (keyup.enter)= "onEnter()">
  `,
  styles: []
})
export class TodoFormComponent implements OnInit {
  @Input() content: string;
  @Output() addTodo = new EventEmitter();

  onEnter() {
    if(this.content) {
      this.addTodo.emit(this.content);
      this.content = '';
    }
  }

  ngOnInit() {
  }
  

}
