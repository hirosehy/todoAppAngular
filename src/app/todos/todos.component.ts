import { Component, OnInit, Input } from '@angular/core';
// import { TODOS } from '../mock-todos'
import { Todo } from '../todo'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() test: string

  todos: Todo[] = []
  dones: Todo[] = []
  select: 'todo' | 'done' = 'todo'

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    const getTodos = this.cookieService.get('todos')
    if (!getTodos) {
      this.cookieService.set('todos', JSON.stringify([]))
      return
    }
    this.todos = JSON.parse(getTodos)
  }

  onRadioClick(id) {
    if (this.select === 'todo') {
      // this.todos = this.todos.filter(t => t.id !== id)
      const index = this.todos.findIndex(t => t.id === id)
      this.todos[index].done = new Date()

      this.cookieService.set('todos', JSON.stringify(this.todos))
    }
    this.dones = this.dones.filter(d => d.id !== id)
  }

  onUpdateBlur(event) {
    const index = this.todos.findIndex(f => f.id === event.id)
    this.todos[index].content = event.content
  }

  idGenerate() {
    while(true) {
      const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      const number = 16
      const id = Array.from(Array(number)).map(() => string[Math.floor(Math.random()*string.length)]).join('')
      const find = this.dones.some(t => t.id === id)
      if (!find) return id
    }
  }

  onAddBlur(value) {
    if (value) {
      this.todos = this.todos.concat({
        id: this.idGenerate(),
        content: value,
        created: new Date()
      })
      this.cookieService.set('todos', JSON.stringify(this.todos))
    }
  }
}
