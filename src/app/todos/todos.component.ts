import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from '../mock-todos'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() test: string

  todos = TODOS.filter(t => !t.done)
  dones = TODOS.filter(t => t.done)
  select: 'todo' | 'done' = 'todo'

  constructor() { }

  ngOnInit() {
    console.log(this.test)    
  }

  onRadioClick(id) {
    if (this.select === 'todo') {
      this.todos = this.todos.filter(t => t.id !== id)
    }
    this.dones = this.dones.filter(d => d.id !== id)
  }
}
