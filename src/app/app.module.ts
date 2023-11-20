import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PropercasePipe } from './shared/pipes/propercase.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModuleMaterials } from './app.material.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    TodoListComponent,
    PropercasePipe,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppModuleMaterials,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
