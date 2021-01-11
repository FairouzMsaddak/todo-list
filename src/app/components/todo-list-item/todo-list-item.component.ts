import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<number> = new EventEmitter();

  removeTodo() {
    this.remove.emit(this.todo.id);
  }

}
