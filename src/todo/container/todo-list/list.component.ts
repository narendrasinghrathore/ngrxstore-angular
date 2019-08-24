import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Observable } from 'rxjs';
import { ITodoList } from 'src/models/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  list$: Observable<ITodoList[]>;
  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.list$ = this.api.getList();
  }

}
