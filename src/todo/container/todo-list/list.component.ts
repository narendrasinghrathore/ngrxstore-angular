import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Observable } from 'rxjs';
import { ITodoList } from 'src/models/list.interface';

import { Store } from '@ngrx/store';
import * as fromStore from '../../storev7/index';
import * as fromSelectors from '../../storev7/todov7.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  list$: Observable<ITodoList[]>;
  listStore$: Observable<ITodoList[]>;
  constructor(
    private api: ApiServiceService,
    private store: Store<fromStore.TodoAppState>
  ) {}

  ngOnInit() {
    this.list$ = this.api.getList();
    this.listStore$ = this.store.select(fromSelectors.getAllTodos);
  }
}
