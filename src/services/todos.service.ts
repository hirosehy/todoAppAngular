import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { TODOS } from '../app/mock-todos'
import { Todo } from '../app/todo'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private cookieService: CookieService) { }

  getTodos(): Todo[] {
    const todos = this.cookieService.get('todos')
    if (!todos) {
      this.cookieService.set('todos', JSON.stringify([]))
      return []
    }
    return JSON.parse(todos)
  }
}
