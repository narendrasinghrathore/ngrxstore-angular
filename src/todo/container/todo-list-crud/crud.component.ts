import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, takeLast } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/core';
import { ApiServiceService } from 'src/todo/services/api-service.service';
import { ITodoList } from 'src/models/list.interface';
import { BehaviorSubject } from 'rxjs';

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



  constructor(private route: ActivatedRoute, private fb: FormBuilder, private service: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.getRouteDetails();
  }

  private getRouteDetails() {
    this.route.paramMap.pipe(take(1)).subscribe(val => {
      const id = +val.get('id');
      this.ifIdFound(id);
    });
  }

  private ifIdFound(id: number) {

    if (!id) {
      return;
    }


    this.service.getListitem(id).pipe(takeLast(1)).subscribe((item: ITodoList) => {
      this.crudForm.patchValue({
        ...item
      });
      this.id.next(id);
    }, () => {
      this.nvaigateToListPage();
    });

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
    const payload: ITodoList = { ...this.crudForm.value, id: this.id.value, timestamp: new Date().getTime(), userId: 1 };
    this.service.createItem(payload).pipe(takeLast(1)).subscribe(
      () => this.nvaigateToListPage()
    );
  }

  updateItem() {
    const payload: ITodoList = { ...this.crudForm.value, id: this.id.value, timestamp: new Date().getTime() };
    this.service.updateItem(payload).pipe(takeLast(1)).subscribe(() => this.nvaigateToListPage());
  }

  deleteItem() {
    this.service.removeItem(this.id.value).pipe(takeLast(1)).subscribe(() => this.nvaigateToListPage());
  }

  nvaigateToListPage() {
    this.router.navigate(['todo/list']);
  }

}
