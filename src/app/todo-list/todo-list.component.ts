import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itodo } from '../models/todo';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() toDoList: Itodo[] = [];
  @Output() ChildEvent: EventEmitter<Itodo> = new EventEmitter();

  displayHeader: string[] = ['Tittle', 'Priority', 'Done'];
  dataSource = new MatTableDataSource(this.toDoList);

  deleteItem(value: Itodo) {
    this.ChildEvent.emit(value);
  }
}
