import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoFilterPipe } from './todo-filter.pipe';
import { TodoContainerComponent } from './todo-container.component';
import { TodoFooterComponent } from './todo-footer.component';
import { TodoFormComponent } from './todo-form.component';
import { TodoListComponent } from './todo-list.component';
import { TodoNavComponent } from './todo-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFilterPipe,
    TodoFooterComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
