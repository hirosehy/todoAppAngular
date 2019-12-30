import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AutofocusDirective } from './autofocus.directive';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { DoneListComponent } from './todos/done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AutofocusDirective,
    TodoListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
