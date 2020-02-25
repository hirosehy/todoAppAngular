import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo'
import { TodosService } from '../../services/todos.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() test: string

  todos: Todo[] = []
  select: 'todo' | 'done' = 'todo'

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todos = this.todosService.getTodos()
  }

  get list() {
    if (this.select === 'todo') {
      return this.todos.filter(t => !t.done)
    }
    return this.todos.filter(t => t.done)
  }

  onRadioClick(id) {
    const index = this.todos.findIndex(t => t.id === id)
    if (this.select === 'todo') {
      this.todos[index].done = new Date()
      this.todosService.setTodos(this.todos)
      return
    }
    this.todos[index].done = undefined
    this.todosService.setTodos(this.todos)
  }

  onUpdateBlur(event) {
    const index = this.todos.findIndex(f => f.id === event.id)
    this.todos[index].content = event.content
    this.todosService.setTodos(this.todos)
  }

  idGenerate() {
    while(true) {
      const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      const number = 16
      const id = Array.from(Array(number)).map(() => string[Math.floor(Math.random()*string.length)]).join('')
      const find = this.todos.some(t => t.id === id)
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
      this.todosService.setTodos(this.todos)
    }
  }
}
