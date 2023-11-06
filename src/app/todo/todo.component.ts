import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../models/todo';

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
  todos: Itodo[] = [
    {
      title: 'Learning Angular',
      priority: 1,
      done: true,
    },
    {
      title: 'Install Angular',
      priority: 1,
      done: true,
    },
    {
      title: 'Run Angular Cli',
      priority: 1,
      done: true,
    },
  ];

  addToDo(todoForm: NgForm) {
    if (todoForm.valid) {
      this.todos.push({ ...todoForm.value });
      console.log(this.todos);
      todoForm.reset();
    } else {
      alert('Invalid input data');
      todoForm.reset();
    }
  }

  deleteToDo(todo: Itodo) {
    this.todos = this.todos.filter((t) => t.title !== todo.title);
  }
}
