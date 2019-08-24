import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
