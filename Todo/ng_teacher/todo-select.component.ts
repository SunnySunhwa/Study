import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'todo-select',
  template: `
    <select [(ngModel)]="status" (change)="changeStatus.emit(status)">
      <option *ngFor="let item of navItems">{{ item }}</option>
    </select>
  `
})
export class TodoSelectComponent implements OnInit {
  status: string;
  @Input() navItems;
  @Output() changeStatus = new EventEmitter();

  ngOnInit() {
    this.status = this.navItems[0];
  }
}
