import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: Todo[]
  @Input() state: 'todo' | 'done'

  showAddRadio = false
  addText = ''

  constructor() { }

  ngOnInit() {
  }

  done(id: string) {
    this.list = this.list.filter(t => t.id !== id)
  }

  setShowAddRadio(show: boolean) {
    this.showAddRadio = show
  }

  idGenerate() {
    while(true) {
      const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      const number = 16
      const id = Array.from(Array(number)).map(() => string[Math.floor(Math.random()*string.length)]).join('')
      const find = this.list.some(t => t.id === id)
      if (!find) return id
    }
  }

  onAddBlur(value: string) {
    if (value) {
      this.list = this.list.concat({
        id: this.idGenerate(),
        content: value,
        created: new Date()
      })
      this.addText = ''
    }
    this.setShowAddRadio(false)
  }

  onUpdateBlur(id, content) {
    const index = this.list.findIndex(f => f.id === id)
    this.list[index].content = content
  }

}
