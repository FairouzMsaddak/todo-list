import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoListService {
  constructor(private http: HttpClient) {}

get(id: string = ''): Observable<Todo | Todo[]> {
    return this.http.get<Todo | Todo[]>(`${environment.todoUrl}/${id}`);
  }
}
