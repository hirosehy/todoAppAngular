import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo'

interface EmitUpdateBlur {
  id: string
  content: string
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: Todo[]
  @Input() state: 'todo' | 'done'

  @Output() onClick = new EventEmitter<string>()
  @Output() emitUpdateBlur = new EventEmitter<EmitUpdateBlur>()
  @Output() emitAddBlur = new EventEmitter<string>()

  showAddRadio = false
  addText = ''

  constructor() { }

  ngOnInit() {
  }

  onRadioClick(id: string) {
    this.onClick.emit(id)
  }

  setShowAddRadio(show: boolean) {
    this.showAddRadio = show
  }

  onAddBlur(value: string) {
    this.setShowAddRadio(false)
    this.emitAddBlur.emit(value)
    this.addText = ''
  }

  onUpdateBlur(id, content) {
    this.emitUpdateBlur.emit({ id: id, content: content })
  }
}
