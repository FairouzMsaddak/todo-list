import { Component, OnInit } from '@angular/core';
import { Todo, Priority } from '../../models/todo.model';
import { TodoListService } from '../../services/todo-list.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo | Todo[]>;

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.todos$ = this.todoListService.get();
  }

  remove(data: number) {
    console.log(data);
    this.todos$ = this.todoListService.get().pipe(
      map((e: Todo []) => e.filter(t => t.id !== data)),
    );
  }
}
