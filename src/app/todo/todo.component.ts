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
    if (todoForm.valid) {
      this.todos.push({ ...todoForm.value });
      console.log(this.todos);
      todoForm.reset();
    } else {
      alert('Invalid input data');
    }
  }

  deleteToDo(todo: Itodo) {
    this.todos = this.todos.filter((t) => t.title !== todo.title);
  }
}

export interface Itodo {
  title: string;
  priority: number;
  done: boolean;
}
