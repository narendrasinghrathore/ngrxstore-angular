import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../core/services/generic-http.service';
import { Observable } from 'rxjs';
import { HTTP_METHOD } from 'src/models/http-config.interface';
import { map, catchError } from 'rxjs/operators';
import { ITodoList } from 'src/models/list.interface';
import { HttpResponse } from '@angular/common/http';


@Injectable()
export class ApiServiceService {

  /**
   * Api string for server running using json-sever with local db.json file
   */
  private apiList = 'http://localhost:3000/list';

  constructor(private service: GenericHttpService) { }


  getList(): Observable<ITodoList[]> {
    return this.service.http<ITodoList[]>({
      method: HTTP_METHOD.GET,
      url: this.apiList
    }).pipe(
      map((data: HttpResponse<ITodoList[]>) => {
        return data.body;
      })
    );
  }

  getListitem(id: number): Observable<ITodoList> {
    return this.service.http<ITodoList>({
      method: HTTP_METHOD.GET,
      url: `${this.apiList}/${id}`
    }).pipe(
      map((data: HttpResponse<ITodoList>) => {
        return data.body;
      })
    );
  }

  createItem(payload: ITodoList): Observable<ITodoList> {
    return this.service.http<ITodoList>({
      body: payload,
      url: this.apiList,
      method: HTTP_METHOD.POST
    });
  }

  updateItem(payload: ITodoList): Observable<ITodoList> {
    return this.service.http<ITodoList>({
      body: payload,
      url: `${this.apiList}/${payload.id}`,
      method: HTTP_METHOD.PUT
    });
  }

  removeItem(id: number): Observable<ITodoList> {
    return this.service.http<ITodoList>({
      url: `${this.apiList}/${id}`,
      method: HTTP_METHOD.DELETE
    });
  }


}
