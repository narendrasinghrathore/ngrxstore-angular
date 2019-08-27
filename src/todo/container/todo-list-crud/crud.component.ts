import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, takeLast, map } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/core';
import { ApiServiceService } from 'src/todo/services/api-service.service';
import { ITodoList } from 'src/models/list.interface';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromIndexStore from '../../storev7/index';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudComponent implements OnInit {
  crudForm: FormGroup;
  id: BehaviorSubject<number> = new BehaviorSubject(0);
  btnText: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ApiServiceService,
    private router: Router,
    private store: Store<fromIndexStore.TodoAppState>
  ) {}

  ngOnInit() {
    this.initForm();

    this.getTodoFromRouterState();
  }

  private getTodoFromRouterState() {
    this.store
      .select(fromIndexStore.getSelectedTodo)
      .pipe(
        take(1),
        map(data => {
          this.crudForm.patchValue({
            ...data
          });
        })
      )
      .subscribe();
  }

  private initForm() {
    this.crudForm = this.fb.group({
      title: '',
      userId: '',
      timestamp: ''
    });
  }

  onSubmit() {
    this.crudForm.patchValue({
      timestamp: new Date().getTime
    });
  }

  addItem() {
    const payload: ITodoList = {
      ...this.crudForm.value,
      id: this.id.value,
      timestamp: new Date().getTime(),
      userId: 1
    };
    this.service
      .createItem(payload)
      .pipe(takeLast(1))
      .subscribe(() => this.nvaigateToListPage());
  }

  updateItem() {
    const payload: ITodoList = {
      ...this.crudForm.value,
      id: this.id.value,
      timestamp: new Date().getTime()
    };
    this.service
      .updateItem(payload)
      .pipe(takeLast(1))
      .subscribe(() => this.nvaigateToListPage());
  }

  deleteItem() {
    this.service
      .removeItem(this.id.value)
      .pipe(takeLast(1))
      .subscribe(() => this.nvaigateToListPage());
  }

  nvaigateToListPage() {
    this.router.navigate(['todo/list']);
  }
}
