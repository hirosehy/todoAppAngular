import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-todos'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos = TODOS

  constructor() { }

  ngOnInit() {
  }

  done(id: string) {
    this.todos = this.todos.filter(t => t.id !== id)
  }
}
