import { Component } from '@angular/core';

@Component({
  selector: 'ui-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  name = 'Angular Template Driven Forms';
  todo: Itodo = {
    name: '',
    Priority: 0,
    done: false,
  };
  // todos: Itodo[] ;
  addToDo() {
    let newtodo = {
      name: this.todo.name,
      priority: this.todo.Priority,
      done: this.todo.done,
    };
    // this.todos.push(newtodo);
    console.log(newtodo);
  }
}
export interface Itodo {
  name: string;
  Priority: number;
  done: boolean;
}
