import { Injectable } from '@angular/core';
import { GenericHttpService } from '../../core/services/generic-http.service';
import { Observable } from 'rxjs';
import { HTTP_METHOD } from 'src/models/http-config.interface';
import { map, catchError, takeLast, tap } from 'rxjs/operators';
import { ITodoList } from 'src/models/list.interface';
import { HttpResponse } from '@angular/common/http';
import { IUser } from 'src/models/user.interface';

@Injectable()
export class ApiServiceService {
  /**
   * Api string for server running using json-sever with local db.json file
   */
  private apiList = 'http://localhost:3000/list';

  private userList = 'http://localhost:3000/users';

  constructor(private service: GenericHttpService) {}

  getList(): Observable<ITodoList[]> {
    return this.service
      .http<ITodoList[]>({
        method: HTTP_METHOD.GET,
        url: this.apiList
      })
      .pipe(
        takeLast(1),
        map((data: HttpResponse<ITodoList[]>) => {
          return data.body;
        })
      );
  }

  getListitem(id: number): Observable<ITodoList> {
    return this.service
      .http<ITodoList>({
        method: HTTP_METHOD.GET,
        url: `${this.apiList}/${id}`
      })
      .pipe(
        takeLast(1),
        map((data: HttpResponse<ITodoList>) => {
          return data.body;
        })
      );
  }

  createItem(payload: ITodoList): Observable<ITodoList> {
    return this.service
      .http<ITodoList>({
        body: payload,
        url: this.apiList,
        method: HTTP_METHOD.POST
      })
      .pipe(
        takeLast(1),
        map((data: HttpResponse<ITodoList>) => data.body)
      );
  }

  updateItem(payload: ITodoList): Observable<ITodoList> {
    return this.service
      .http<ITodoList>({
        body: payload,
        url: `${this.apiList}/${payload.id}`,
        method: HTTP_METHOD.PUT
      })
      .pipe(
        takeLast(1),
        map((data: HttpResponse<ITodoList>) => data.body)
      );
  }

  removeItem(id: number): Observable<ITodoList> {
    return this.service
      .http<ITodoList>({
        url: `${this.apiList}/${id}`,
        method: HTTP_METHOD.DELETE
      })
      .pipe(
        takeLast(1),
        map((data: HttpResponse<ITodoList>) => data.body)
      );
  }

  getUser(id: number) {
    return this.service
      .http<IUser>({
        url: `${this.userList}/${id}`,
        method: HTTP_METHOD.GET
      })
      .pipe(
        takeLast(1),
        map((data: HttpResponse<IUser>) => {
          return data.body;
        })
      );
  }

  getAllUsers() {
    return this.service
      .http<IUser[]>({
        url: `${this.userList}`,
        method: HTTP_METHOD.GET
      })
      .pipe(
        takeLast(1),
        map((data: HttpResponse<IUser[]>) => {
          return data.body;
        })
      );
  }
}
