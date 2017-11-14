import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TodoContainerComponent } from './todo-container.component';
import { TodoFormComponent } from './todo-form.component';
import { TodoSelectComponent } from './todo-select.component';
import { TodoListComponent } from './todo-list.component';
import { TodoFilterPipe } from './todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFormComponent,
    TodoSelectComponent,
    TodoListComponent,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
