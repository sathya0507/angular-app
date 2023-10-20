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
    title: '',
    priority: 0,
    done: false,
  };
  todos: Itodo[] = [];

  addToDo(todoForm: NgForm) {
    this.todos.push({ ...todoForm.value });
    console.log(this.todos);
    todoForm.reset();
  }
}

export interface Itodo {
  title: string;
  priority: number;
  done: boolean;
}
