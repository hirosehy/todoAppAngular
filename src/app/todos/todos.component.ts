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
  select: 'todo' | 'done' = 'todo'

  constructor() { }

  ngOnInit() {
    console.log(this.test)
  }
}
