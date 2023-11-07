import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PropercasePipe } from './shared/pipes/propercase.pipe';

@NgModule({
  declarations: [AppComponent, TodoComponent, DataBindingComponent, ParentComponent, ChildComponent, TodoListComponent, PropercasePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
