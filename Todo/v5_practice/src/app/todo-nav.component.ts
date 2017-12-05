import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-nav',
  template: `
   <ul class="nav nav-xs nav-pills">
          <li *ngFor="let navItem of navItems" [class.active]="navItem === selectedNavItem">
            <a (click)="setCurrentNavItem.emit(navItem)">{{navItem}}</a>
          </li>
          </ul>
  `,
  styles: []
})
export class TodoNavComponent implements OnInit {
  @Input () navItems : string[];
  @Input () selectedNavItem: string;
  @Output() setCurrentNavItem = new EventEmitter();

  ngOnInit() {
  }

}
