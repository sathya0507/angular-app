import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ui-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  name = 'Angular Template Driven Forms';
  todo: Itodo = {
    tittle: 'sathya',
    priority: 1,
    done: true,
  };
  todos: Itodo[] = [];
  addToDo(todoForm: NgForm) {
    this.todos.push(todoForm.value);
    console.log(this.todos);
    todoForm.reset();
  }
}
export interface Itodo {
  tittle: string;
  priority: number;
  done: boolean;
}
