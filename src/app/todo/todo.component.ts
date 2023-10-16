import { Component } from '@angular/core';

@Component({
  selector: 'ui-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  name = 'Todo List App';
  todos = [{}];
  addToDo(newToDoTittle: string, newPriority: string, newDone: string) {
    let newtodo = {
      tittle: newToDoTittle,
      priority: newPriority,
      done: newDone,
    };
    this.todos.push(newtodo);
    console.log(this.todos);
  }
}
