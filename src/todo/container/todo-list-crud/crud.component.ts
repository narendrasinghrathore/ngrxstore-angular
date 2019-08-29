import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, takeLast, map } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/core';
import { ApiServiceService } from 'src/todo/services/api-service.service';
import { ITodoList } from 'src/models/list.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromIndexStore from '../../storev7/index';
import { IUser } from 'src/models/user.interface';

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
  user$: Observable<IUser>;

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
          if (data) {
            this.id.next(data.id);
            this.crudForm.patchValue({
              ...data
            });
            this.user$ = this.store.pipe(
              select(fromIndexStore.getUser(), {
                id: this.crudForm.get('userId').value
              })
            );
          }
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
    this.store.dispatch(new fromIndexStore.CreateTodo(payload));
  }

  updateItem() {
    const payload: ITodoList = {
      ...this.crudForm.value,
      id: this.id.value,
      timestamp: new Date().getTime()
    };
    this.store.dispatch(new fromIndexStore.UpdateTodo(payload));
  }

  deleteItem() {
    const payload = { id: this.id.value, ...this.crudForm.value };
    this.store.dispatch(new fromIndexStore.DeleteTodo(payload));
  }

  navigateToListPage() {
    this.router.navigate(['todo/list']);
  }
}
