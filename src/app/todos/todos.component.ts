import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from '../mock-todos'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() test: string

  todos = TODOS
  showAddRadio = false
  addText = ''

  constructor() { }

  ngOnInit() {
    console.log(this.test)
  }

  done(id: string) {
    this.todos = this.todos.filter(t => t.id !== id)
  }

  setShowAddRadio(show: boolean) {
    this.showAddRadio = show
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

  onAddBlur(value: string) {
    if (value) {
      this.todos = this.todos.concat({
        id: this.idGenerate(),
        content: value,
        created: new Date()
      })
      this.addText = ''
    }
    this.setShowAddRadio(false)
  }

  onUpdateBlur(id, content) {
    const index = this.todos.findIndex(f => f.id === id)
    this.todos[index].content = content
  }
}
