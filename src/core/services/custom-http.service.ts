import { Injectable } from '@angular/core';
import { GenericHttpService } from './generic-http.service';
import { Observable } from 'rxjs';
import { ITodoList } from 'src/models/list.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  /**
   * Api string for server running using json-sever with local db.json file
   */
  api = 'http://localhost:3000/';

  constructor(private httpService: GenericHttpService) { }

  getlist<T>(data: string): Observable<T[]> {
    return this.httpService.http({
      method: 'GET',
      url: `${this.api}/${data}`
    });
  }
}
