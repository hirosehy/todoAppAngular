import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Todo } from '../app/todo'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private cookieService: CookieService) { }

  todos: Todo[] =
    this.cookieService.get('todos')
      && JSON.parse(this.cookieService.get('todos'))
      || []

  getTodos(): Todo[] {
    return this.todos
  }

  setTodos(todos: Todo[]): void {
    this.cookieService.set('todos', JSON.stringify(todos))
  }
}
